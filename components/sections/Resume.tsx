'use client'

import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Code, Library, Award } from 'lucide-react'
import Image from 'next/image'

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering (Data Science)',
    institution: 'Anurag University',
    location: 'Hyderabad, India',
    period: '2022 - 2026',
    description: 'Pursuing a Bachelor\'s Degree in Computer Science and Engineering from Anurag University, Hyderabad, class of 2026.'
  },
  {
    degree: 'Intermediate in MPC',
    institution: 'Geetanjali Junior College',
    location: 'Hyderabad, India',
    period: 'Graduated April 2022',
    score: 'Percentage: 85.5%'
  },
  {
    degree: '10th Grade',
    institution: 'DAV Public School',
    location: 'Hyderabad, India',
    period:'graduated April 2020',
    score: 'CGPA: 9.0'
  }
]

const coursework = {
  undergraduate: [
    'Programming and Data Structures',
    'Design and Analysis of Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems'
  ],
  certifications: [
    'AWS Certified Cloud Practitioner',
    'Cisco Cybersecurity Specialist (CSS)'
  ]
}

const skills = {
  languages: ['C/C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'R'],
  frameworks: ['React', 'NumPy', 'Pandas', 'Flask', 'ASP.NET Core', 'Entity Framework Core'],
  tools: ['Git', 'GitHub', 'Jupyter Notebook', 'Helm', 'Docker'],
  familiar: ['AWS', 'Android Development', 'MERN Stack', 'Machine Learning', 'Deep Learning', 'Microsoft Azure', 'Azure DevOps'],
  databases: ['MySQL', 'Azure Cosmos DB']
}

const experience = [
  {
    title: 'Software Engineer Intern',
    company: 'Meta (Swecha Telangana)',
    location: 'India',
    period: 'May 2024 - June 2024',
    details: [
      'Telugu Large Language Model (LLM): Developed and optimized a Telugu LLM to understand and interact with natural languages. Using Python, TensorFlow, PyTorch, spaCy and NLTK for NLP, along with Flask for API integration.',
      'Data Preprocessing: Prepared and fine-tuned datasets for accurate linguistic representation.'
    ]
  },
  {
    title: 'Software Engineering Virtual Intern',
    company: 'Goldman Sachs',
    location: 'India',
    period: 'July 2024',
    details: [
      'Password Security Analysis: Identified outdated password hashing algorithms and proposed security improvements.',
      'Documentation: Prepared a detailed memo summarizing findings and recommendations.',
      'Technologies: Python, Git, Cybersecurity tools, Security Analysis Techniques'
    ]
  },
  {
    title: 'Software Engineering Virtual Intern',
    company: 'Hewlett Packard Enterprise',
    location: 'Remote',
    period: 'Aug 2024',
    details: [
      'Microservices Architecture: Gained hands-on experience in developing microservices using modern technologies and frameworks.',
      'RESTful API Design: Designed and implemented REST APIs to enable seamless communication between services.',
      'Agile Practices: Applied Agile methodologies, including sprint planning and collaborative teamwork.',
      'Technologies: Python, Flask, REST API, Docker, Git'
    ]
  },
  {
    title: 'Graphic Designing Intern',
    company: 'Wission Talks',
    location: 'India',
    period: 'May 2024 - July 2024',
    details: [
      'UI/UX Design: Developed engaging visual content using Canva.'
    ]
  }
]

const achievements = [
  {
    platform: 'CodeChef',
    rating: '4-Star'
  },
  {
    platform: 'HackerRank',
    rating: '4-Star in Java, 5-Star in C++, 5-star in Python'
  },
  {
    platform: 'LeetCode',
    rating: '350+ problems solved; 50+ SQL challenges completed'
  }
]

export default function Resume() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Resume
        <span className="h-1 w-12 bg-purple-400 rounded"></span>
      </h2>

      {/* Education Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="text-purple-400" />
          Education
        </h3>
        <div className="relative border-l-2 border-purple-400 pl-8 ml-2 space-y-8">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px]" style={{ top: `${index * 144 + 8}px` }}></div>
              <div className="bg-[#252525] p-6 rounded-lg">
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-purple-400">{edu.institution}</p>
                <p className="text-gray-400">{edu.location}</p>
                <p className="text-gray-400">{edu.period}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="text-purple-400" />
          Experience
        </h3>
        <div className="relative border-l-2 border-purple-400 pl-8 ml-2 space-y-8">
          {experience.map((exp, index) => (
            <div key={index}>
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px]" style={{ top: `${index * 144 + 8}px` }}></div>
              <div className="bg-[#252525] p-6 rounded-lg">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-purple-400">{exp.company}</p>
                <p className="text-gray-400">{exp.location} • {exp.period}</p>
                <ul className="mt-2 space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-gray-300">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#252525] p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Programming Languages</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.languages.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-gray-300">
                  <Code className="w-5 h-5 text-purple-400" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#252525] p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Frameworks & Libraries</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.frameworks.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-gray-300">
                  <Library className="w-5 h-5 text-purple-400" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#252525] p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Tools & Technologies</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.tools.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-gray-300">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="text-purple-400" />
          Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-[#252525] p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">{achievement.platform}</h4>
              <p className="text-gray-300">{achievement.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.article>
  )
}