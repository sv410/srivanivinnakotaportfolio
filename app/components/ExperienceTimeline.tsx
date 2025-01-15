'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"

interface TimelineItem {
  title: string
  company: string
  date: string
  description: string[]
}

const experiences: TimelineItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Meta (Swecha Telangana)",
    date: "May 2024 - June 2024",
    description: [
      "Developed and optimized a Telugu LLM for natural language understanding",
      "Used Python, TensorFlow, PyTorch, spaCy and NLTK for NLP",
      "Prepared and fine-tuned datasets for accurate linguistic representation"
    ]
  },
  {
    title: "Software Engineering Virtual Intern",
    company: "Goldman Sachs",
    date: "July 2024",
    description: [
      "Identified outdated password hashing algorithms and proposed security improvements",
      "Prepared detailed memo summarizing findings and recommendations",
      "Technologies: Python, Git, Cybersecurity tools"
    ]
  },
  {
    title: "Software Engineering Virtual Intern",
    company: "Hewlett Packard Enterprise",
    date: "Aug 2024",
    description: [
      "Gained hands-on experience in developing microservices",
      "Designed and implemented REST APIs",
      "Applied Agile methodologies and collaborative teamwork"
    ]
  }
]

export function ExperienceTimeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-zinc-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <h3 className="text-xl font-semibold text-purple-300">{experience.title}</h3>
            <p className="text-purple-400 mb-2">{experience.company}</p>
            <p className="text-sm text-gray-400 mb-4">{experience.date}</p>
            <ul className="list-disc list-inside space-y-2">
              {experience.description.map((item, i) => (
                <li key={i} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

