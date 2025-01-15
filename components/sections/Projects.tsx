'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Student-Mentor Management System',
    description: 'Designed features for mentor search, session scheduling, and profile management.',
    image: 'project1.png',
    github: 'https://github.com/sv410',
    live: 'https://student-mentor-system.example.com',
    tags: ['Java', 'Firebase', 'SQL', 'XML']
  },
  {
    title: 'Chatbot with NLP',
    description: 'Developed a chatbot using natural language processing to process queries and retrieve data from MySQL.',
    image: 'project2.png',
    github: 'https://github.com/sv410',
    live: 'https://chatbot.example.com',
    tags: ['Python', 'MySQL', 'NLP libraries']
  },
  {
    title: 'Resume Uploader and Analyzer',
    description: 'Web app to simplify resume submission and analysis, generating tailored interview questions.',
    image: 'project3.png',
    github: 'https://github.com/sv410',
    live: 'https://resume-uploader.example.com',
    tags: ['Node.js', 'Express.js', 'HTML', 'CSS', 'JavaScript', 'Multer']
  },
  {
    title: 'Portfolio Website',
    description: 'Created an animated and responsive personal portfolio.',
    image: 'project4.png',
    github: 'https://github.com/sv410',
    live: 'https://portfolio.example.com',
    tags: ['Next.js', 'Tailwind CSS', 'Three.js']
  },
  {
    title: 'Tourism Management System',
    description: 'Designed a system for managing tour bookings and customer data.',
    image: 'project5.png',
    github: 'https://github.com/sv410',
    live: 'https://tourism.example.com',
    tags: ['Java', 'MySQL']
  },
  {
    title: 'Diet Tracker API',
    description: 'Created an API for tracking dietary habits with authentication and database integration.',
    image: 'project6.png',
    github: 'https://github.com/sv410',
    live: 'https://diet-tracker.example.com',
    tags: ['Node.js', 'MongoDB', 'Express.js']
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Projects
        <span className="h-1 w-12 bg-purple-400 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#252525] rounded-lg overflow-hidden relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-purple-400/20 text-purple-300 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-500 transition-colors">
                    View Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-500 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.article>
  )
}