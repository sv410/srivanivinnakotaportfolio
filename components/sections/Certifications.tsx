'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'Machine Learning with Python - Level 1',
    issuer: 'IBM',
    date: 'January 14, 2024',
    credential: 'IBM Skills Network',
    description: 'Successfully completed comprehensive training in machine learning fundamentals using Python.'
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'Goldman Sachs',
    date: 'January 16, 2024',
    credential: 'Forage',
    description: 'Completed practical tasks including password database security analysis and implementing security improvements.'
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'November 24, 2024',
    credential: 'Student Level Credential',
    description: 'Mastered network communication concepts, protocols, and practical configuration skills.'
  },
  {
    title: 'MongoDB Data Modeling Path',
    issuer: 'MongoDB',
    date: 'March 30, 2024',
    credential: 'Credential ID: MDB2mv5ijqllv',
    description: 'Completed comprehensive training in MongoDB data modeling principles and best practices.'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'October 2023',
    credential: 'AWS Certification',
    description: 'Demonstrated foundational knowledge of AWS cloud services and architecture.'
  },
  {
    title: 'CISCO - Cybersecurity Specialist (CSS)',
    issuer: 'Cisco',
    date: 'September 2023',
    credential: 'Cisco Certification',
    description: 'Specialized training in network security and cybersecurity principles.'
  }
]

export default function Certifications() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Certifications
        <span className="h-1 w-12 bg-purple-400 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#252525] p-6 rounded-lg flex items-start gap-4 hover:bg-[#2a2a2a] transition-colors"
          >
            <Award className="text-purple-400 w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-purple-400">{cert.issuer}</p>
              <p className="text-gray-400">{cert.date}</p>
              <p className="text-gray-300 text-sm mt-2">{cert.credential}</p>
              <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.article>
  )
}

