'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const dummyCertificates = [
  {
    title: "9th Place - DataVers ANAVA",
    organizer: "Universitas Gadjah Mada - Himpunan Mahasiswa Statistika.",
    date: "January 2025",
    image: "/Pics/serti4.jpg",
    description: `
      In this competition, we tackled predictive maintenance challenges by leveraging sensor data to classify machine status into Normal, Warning, or Breakdown. With a dataset of 13 million rows and 28 features, we handled class imbalance, outliers, and missing values through preprocessing and applied cost-sensitive learning for optimal F1 performance. Our final model, built with XGBoost and GPU acceleration, achieved an F1-score of 0.4803 and ranked 3rd in the Public Leaderboard and 9th in the Private Leaderboard. Our pipeline integrated model tuning, feature selection, and industrial deployment recommendations to ensure model robustness in real-world conditions.
    `,
  },
  {
    title: "Arkavidia - Datavidia",
    organizer: "Institut Teknologi Bandung - Himpunan Mahasiswa Informatika.",
    date: "March 2025",
    image: "/Pics/serti1.jpg",
    description: `In this national-level competition, we were challenged to forecast the daily prices of 13 essential food commodities across 34 Indonesian provinces. Our solution utilized XGBoost for multivariate time series forecasting with advanced preprocessing steps including missing value imputation, outlier detection using IQR/Z-score, and rolling median smoothing.
        We achieved a mean MAPE under 5%, with beef showing the lowest error (0.86%). Our model handled volatile commodities like chili and garlic effectively by incorporating lag features and spatial patterns, showcasing real-world applicability in economic forecasting. We placed 73rd out of 230 teams.`,
        tags: ["XGBoost", "Multivariate Forecasting", "Time Series", "Feature Engineering", "MAPE"],
  },
  {
    title: "Gammafest 2025 - Data Science Competition",
    organizer: "Himpunan Mahasiswa Statistika IPB University",
    date: "April 2025",
    image: "/Pics/serti2.jpg",
    description: `This competition challenged participants to develop a paper recommendation system by predicting citation links between scientific papers in the mythical Elbaf Library. Our solution involved binary classification using logistic regression and ensemble learning (VotingClassifier), combining Logistic Regression, XGBoost, and Decision Trees.
        We engineered TF-IDF representations from titles, abstracts, and keywords, and built similarity features such as cosine distance, length ratios, and keyword intersections. Our model was trained using stratified 5-fold cross-validation and optimized for the MCC (Matthews Correlation Coefficient) metric, reflecting robust handling of imbalanced citation data.`,
        tags: ["TF-IDF", "Similarity Features", "VotingClassifier", "XGBoost", "MCC", "NLP"],},
  {
    title: "FIND IT 2025 – Data Analytics Competition",
    organizer: "Department of Electrical and Information Engineering, Universitas Gadjah Mada",
    date: "April 2025",
    image: "/Pics/serti3.jpg",
    description: `In this competition, we developed a machine learning pipeline to assess COPPA compliance risk for mobile apps. We engineered domain-specific features such as privacy compliance scores, child-oriented app indicators, and local developer validation.
        Our ensemble model combined XGBoost, LightGBM, and CatBoost, each with tailored regularization, and achieved strong AUC scores on validation. Extensive feature engineering included log-scaling of downloads, rating-per-download, region-based privacy laws, and behavioral flags like new apps without privacy links. The final ensemble weighted predictions using model-specific AUC contributions, improving generalization under class imbalance.`,
        tags: ["XGBoost", "LightGBM", "CatBoost", "Privacy Risk", "Ensemble Learning", "AUC"],
    },
]

export default function CertificatesSection() {
    return (
      <section id="certificates" className="px-6 md:px-12 py-24 bg-white">
        <h2 className="text-4xl font-bold mb-16 max-w-7xl mx-auto">Achievements & Certificates</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {dummyCertificates.map((cert, index) => {
            const delay = index * 0.2
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  
            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                {/* Gambar sertifikat */}
                <div className="relative w-full p-4 pb-0">
                  <div className="relative w-full h-0 pt-[70.85%]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
  
                {/* Informasi sertifikat */}
                <div className="px-6 pt-4 pb-6 space-y-2">
                  <p className="text-sm text-gray-500">{cert.date}</p>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm italic text-gray-600">Organized by {cert.organizer}</p>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    )
  }
