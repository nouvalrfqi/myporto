'use client';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [interestRef, interestInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* SECTION: Hero */}
      <section className="w-full min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 pt-16 pb-12 md:py-0 relative overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* KIRI - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10 space-y-6 order-1 md:order-1 pt-8 md:pt-0 text-center md:text-left"
          >
            <h1 className="leading-tight">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Muhammad</span><br />
              <span className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Nouval Rifqi</span>
            </h1>

            <div className="text-gray-600 text-base sm:text-lg">
              <p>Student at Universitas Syiah Kuala</p>
              <p>Faculty of Mathematics and Natural Sciences</p>
              <p>Department of Informatics</p>
            </div>
            <div className="flex gap-5 pt-4 text-gray-600 text-2xl justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/muhammad-nouval-rifqi/" target="_blank" className="hover:text-black transition-colors duration-200"><FaLinkedin /></a>
              <a href="https://github.com/nouvalrfqi" target="_blank" className="hover:text-black transition-colors duration-200"><FaGithub /></a>
              <a href="mailto:m.nouvalrfqi@gmail.com" className="hover:text-black transition-colors duration-200"><FaEnvelope /></a>
            </div>
          </motion.div>

          {/* KANAN - Photo */}
          <motion.div
            initial={{ opacity: 0, y: 80, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full flex justify-center md:justify-end order-2 md:order-2"
          >
            <div className="relative w-[280px] h-[300px] sm:w-[350px] sm:h-[380px] md:w-[420px] md:h-[450px] lg:w-[500px] lg:h-[530px] xl:w-[550px] xl:h-[570px]">
              <Image
                src="/Pics/Profile.jpeg"
                alt="Muhammad Nouval Rifqi"
                fill
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: Bio */}
      <section id="bio" ref={bioRef} className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-35 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12"
          >
            Bio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="text-base sm:text-lg leading-relaxed text-gray-700"
          >
            Muhammad Nouval Rifqi is a student at Universitas Syiah Kuala, Faculty of Mathematics and Natural Sciences, majoring in Informatics. 
            His interests span across machine learning, natural language processing, and computer vision. Passionate about research and real world 
            application, he continuously works on impactful personal and collaborative projects, particularly in data science and data analytics. 
            He also has strong interests in data engineering and business intelligence, with hands on experience in building analytical dashboards, data driven 
            applications, and forecasting systems that transform raw data into structured, actionable insights.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="text-base sm:text-lg leading-relaxed text-gray-700 mt-6"
          >
            He is actively participating in academic competitions and enjoys sharing knowledge through open-source contributions and writing. 
            His goal is to bridge the gap between advanced research and accessible technology.
          </motion.p>
        </div>
      </section>

      {/* SECTION: Interest */}
      <section id="interest" ref={interestRef} className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={interestInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12"
          >
            Areas of Interest
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-gray-700">
            {[
              {
                title: "AI & Machine Learning Modelling",
                desc: "Focused on building and evaluating predictive models using tools such as Python, Scikit-Learn, and PyTorch. Experienced in model evaluation, hyperparameter tuning, cross-validation, and applying techniques like ensemble learning, tree-based models, and deep learning architectures."
              },
              {
                title: "Natural Language Processing (NLP)",
                desc: "Specializing in processing and understanding textual data using transformer-based models (e.g., BERT, RoBERTa), traditional NLP pipelines (e.g., TF-IDF, N-gram), and sequence modeling techniques such as RNN and attention mechanisms. Skilled in fine-tuning and evaluating language models for real-world applications."
              },
              {
                title: "Computer Vision",
                desc: "Proficient in applying convolutional neural networks (CNN), object detection algorithms (YOLO, Faster R-CNN), and image processing techniques with OpenCV and PyTorch. Also experienced in visual analytics, spatial tracking, and building visual dashboards for performance analysis."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={interestInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, delay: 0.6 + i * 0.2 }}
              >
                <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
