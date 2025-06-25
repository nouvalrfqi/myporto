'use client'

import Image from "next/image"

const dummyCertificates = [
  {
    title: "1st test - test Competition",
    organizer: "National AI Challenge 2024",
    date: "March 2024",
    image: "/Pics/serti3.jpg",
    description: "Faced a challenge to detect pneumonia from X-ray scans with limited training data. We applied data augmentation, fine-tuned a pre-trained EfficientNet model, and integrated Grad-CAM visualization for interpretability. Our team achieved 95% accuracy and won 1st place.",
  },
  {
    title: "Top 10 test - NLP test",
    organizer: "Indonesia NLP Week 2023",
    date: "Nov 2023",
    image: "/Pics/serti2.jpg",
    description: "Participated in building a chatbot to assist student mental health inquiries. Built using Rasa and fine-tuned IndoBERT for question classification. Finalist among 300+ teams.",
  },
  {
    title: "test Place - IoT Smart Home Design",
    organizer: "IoT Hackfest 2023",
    date: "July 2023",
    image: "/Pics/serti1.jpg",
    description: "Developed a smart home prototype using ESP32 with MQTT and Node-RED dashboard. Our innovation involved automatic energy balancing based on occupancy sensors.",
  },
  {
    title: "test Place - IoT Smart Home Design",
    organizer: "IoT Hackfest 2023",
    date: "July 2023",
    image: "/Pics/serti4.jpg",
    description: "Developed a smart home prototype using ESP32 with MQTT and Node-RED dashboard. Our innovation involved automatic energy balancing based on occupancy sensors.",
  },
]

export default function CertificatesSection() {
  return (
    <section id="certificates" className="px-6 md:px-12 py-24 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {dummyCertificates.map((cert, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
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
          </div>
        ))}
      </div>
    </section>
  )
}
