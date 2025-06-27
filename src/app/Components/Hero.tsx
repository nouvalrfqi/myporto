'use client';

import { Typewriter } from 'react-simple-typewriter';
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
      <section className="w-full h-screen flex items-center px-6 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        {/* KIRI */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pl-12 z-10 space-y-6"
        >
          <h1 className="leading-tight">
            <span className="text-6xl">Muhammad</span><br />
            <span className="font-bold text-8xl">Nouval Rifqi</span>
          </h1>

        {/* Dynamic Typing Text 
            <div className="text-xl md:text-2xl text-blue-600 font-medium pt-2">
            <Typewriter
                words={[
                "I’m enthusiast at Machine Learning",
                "I love NLP (Natural Language Processing)",
                "I enjoy building Computer Vision projects",
                "I’m passionate about Robotics",
                "I explore IoT technology",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
            />
            </div>
        */}
          <div className="text-gray-600 text-lg">
            <p>Student at Universitas Syiah Kuala</p>
            <p>Faculty of Mathematics and Natural Sciences</p>
            <p>Department of Informatics</p>
          </div>
          <div className="flex gap-5 pt-4 text-gray-600 text-2xl">
            <a href="https://www.linkedin.com/in/muhammad-nouval-rifqi/" target="_blank" className="hover:text-black"><FaLinkedin /></a>
            <a href="https://github.com/nouvalrfqi" target="_blank" className="hover:text-black"><FaGithub /></a>
            <a href="mailto:m.nouvalrfqi@gmail.com" className="hover:text-black"><FaEnvelope /></a>
          </div>
        </motion.div>

        {/* KANAN */}
        <motion.div
          initial={{ opacity: 0, y: 80, clipPath: 'inset(0 100% 0 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="relative w-full flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <div className="relative z-0 translate-x-[-40px] md:translate-x-[-45px] w-[550px] h-[570px]">
            <Image
              src="/Pics/Profile.jpeg"
              alt="Muhammad Nouval Rifqi"
              fill
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION: Bio */}
      <section id="bio" ref={bioRef} className="w-full px-6 md:px-20 py-35 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-12"
          >
            Bio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="text-lg leading-relaxed text-gray-700"
          >
            Muhammad Nouval Rifqi is a student at Universitas Syiah Kuala, Faculty of Mathematics and Natural Sciences,
            majoring in Informatics. His interests span across machine learning, natural language processing, and computer vision. 
            Passionate about research and real-world application, he continuously works on impactful personal and collaborative projects, 
            particularly in data science and software engineering.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="text-lg leading-relaxed text-gray-700 mt-6"
          >
            He is actively participating in academic competitions and enjoys sharing knowledge through open-source contributions and writing. 
            His goal is to bridge the gap between advanced research and accessible technology.
          </motion.p>
        </div>
      </section>

      {/* SECTION: Interest */}
      <section id="interest" ref={interestRef} className="w-full px-6 md:px-20 py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={interestInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-bold mb-12"
          >
            Areas of Interest
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-700">
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
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
