"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Trump vs Kamala – Sentiment Analysis",
    description: "A political sentiment analysis project using YouTube debate comments to compare public perception of Trump and Kamala. Utilizes RoBERTa for context-aware sentiment classification and interactive visualization.",
    tech: ["RoBERTa", "Sastrawi", "YouTube API", "Matplotlib", "Python"],
    github: "https://github.com/nouvalrfqi/SentimentAnalysisDonaldTtumpVSKamalaHaris",
  },
  {
    title: "Undercover Game App",
    description: "A social deduction mobile game inspired by 'Undercover'. Players take on secret roles as civilians or undercovers, using single-word clues to identify others while hiding their identity.",
    tech: ["Android Studio", "Java", "XML", "Firebase"],
    github: "https://github.com/nouvalrfqi/UndercoverGames",
  },
  {
    title: "Voice Chatbot – STT, Gemini LLM, TTS Integration",
    description: "A voice-based chatbot that converts user speech to text, processes it with Gemini API, and responds back with speech. The interface is built using Gradio for interactive testing.",
    tech: ["Whisper.cpp", "Gemini API", "Coqui TTS", "Gradio", "Python"],
    github: "https://github.com/nouvalrfqi/VoiceChatbot",
  },
  {
    title: "Automatic Text Summarization for Indonesian News",
    description: "A summarization system for Indonesian news articles using the IndoT5-base model fine-tuned on IndoSum. Evaluated with ROUGE metrics and implemented in Colab.",
    tech: ["IndoT5", "IndoSum", "Transformers", "Google Colab", "Python"],
    github: "https://github.com/nouvalrfqi/AutomaticNewsSummarization",
  },
  {
    title: "Food Security Analysis in Aceh Using KNN Classification",
    description: "A machine learning project analyzing food security in Aceh Province using K-Nearest Neighbors. It classifies regions into six vulnerability levels and provides visual and data-driven policy insights.",
    tech: ["KNN", "Scikit-learn", "Pandas", "Matplotlib", "Python"],
    github: "https://github.com/nouvalrfqi/AnalisisKetahananPanganDiProvinsiAcehMenggunakanKlasifikasiKNN",
  },
  {
    title: "Emotion Classification with Bi-LSTM",
    description: "A deep learning project to classify emotions such as anger, fear, joy, love, sadness, and surprise from text using a Bidirectional LSTM. The pipeline includes data preprocessing, model training, and evaluation.",
    tech: ["Bi-LSTM", "TensorFlow", "Keras", "Pandas", "Python"],
    github: "https://github.com/nouvalrfqi/EmotionClassificationWithBi-LSTM",
  }
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="px-6 md:px-12 py-32 bg-white text-black">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8,delay: 0.4 }}
        className="text-3xl font-bold mb-12 max-w-7xl mx-auto"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            className="group space-y-4 relative pl-12"
          >
            {/* Nomor urut dalam bulatan */}
            <div className="absolute left-0 top-0">
              <div className="w-8 h-8 rounded-full bg-white text-black border border-black flex items-center justify-center font-bold text-sm opacity-50">
                {index + 1}
              </div>
            </div>

            {/* Judul & deskripsi */}
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-zinc-700">{project.description}</p>

            {/* Tech */}
            <p className="text-xs italic text-zinc-500">Tech: {project.tech.join(', ')}</p>

            {/* Tombol */}
            <div className="opacity-100 transition-opacity duration-300 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-4 py-1 rounded-full bg-white text-black border border-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

