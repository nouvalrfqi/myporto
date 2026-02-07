'use client';
import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const experiences = [
    {
        date: "08/2023 – Present",
        role: "Junior High School Robotics Teacher",
        company: "SMP IT Islam Cendekia Darussalam",
        description:
          "Involved in curriculum development aligned with technological advancements, encompassing the design of learning materials in the field of informatics, particularly robotics. Taught robotics subjects to students, focusing on basic programming concepts and the use of Microbits software. Regularly assessed students' understanding and progress in robotics subjects and provided training on how to explain created programs to others.",
        tech: ["Microbit", "Iot Hardware", "Robotics"]
      },
      {
        date: "02/2024 – 07/2024",
        role: "Database Lab Assistant",
        company: "Universitas Syiah Kuala",
        description:
          "Prepared and conducted database laboratory sessions by drafting materials, organizing practical resources, and ensuring necessary software availability. Guided students through fundamental database concepts and provided technical support during practice. Assisted students in understanding difficult concepts with additional explanations and one-on-one mentoring. Evaluated student competency levels and provided constructive feedback to support skill development.",
        tech: ["XAMPP", "Sql"]
      },
      {
        date: "08/2024 – 01/2025",
        role: "Business Intelligence",
        company: "Semen Indonesia Group. Tbk",
        description:
          "Developed five analytical dashboards for SIG Group and its subsidiaries using Power BI, covering financial performance, cost structure, topline Mortar analysis (MKI, VUB, SBB), geospatial Opco mapping of major cement regions, and consolidated financial insights to identify profitability and business impact. Additionally, built a demand forecasting system for Ready Mix Concrete (RMC) using a SARIMAX model with exogenous variables (BI Rate, Inflation, Construction GDP, and Effective Working Days), integrated into a Streamlit analytical application to support data-driven planning.",
        tech: ["Power BI", "Python", "Machine Learning"]
      }
];

const ExperienceSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
    return (
      <section id="experience" ref={ref} className="bg-gray-100 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Judul */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-16"
          >
            Experience
          </motion.h2>
  
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8"
              >
                {/* Tanggal */}
                <p className="text-gray-500 text-sm">{exp.date}</p>
  
                {/* Konten */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">
                    {exp.role} – <span className="font-bold">{exp.company}</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;