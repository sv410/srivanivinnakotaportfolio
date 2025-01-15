'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Search, Users } from 'lucide-react'

const whatImDoing = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Artificial Intelligence',
    description: 'Building AI applications that help people while breaking barriers of technology.'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Creating stunning websites and interfaces that are functional while leaving users in awe.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Data Engineering Research',
    description: 'Exploring modern data engineering practices, focusing on building scalable data pipelines and optimizing data workflows.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Events',
    description: 'Attending, organising and volunteering in tech events is integral to my skill enrichment.'
  }
]

const technicalSkills = {
  languages: [
    'C', 'C++', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'
  ],
  frameworks: [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'NumPy', 'Pandas',
    'Flask', 'Bootstrap', 'Tensorflow', 'Keras'
  ]
}

export default function About() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 text-gray-300"
        >
          <p>
  AI and data science enthusiast with a B.Tech in Computer Science and Engineering @ Anurag University. Skilled in machine learning and web development, I bring creativity and innovation to tech solutions.
</p>
<p>
  Adept at transforming complex problems into impactful, user-friendly solutions. Ready to contribute in dynamic, collaborative environments.
</p>

        </motion.div>
      </section>

      <section className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white"
        >
          What I&apos;m Doing
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whatImDoing.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#252525] p-6 rounded-lg space-y-4"
            >
              <div className="text-purple-400">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white flex items-center gap-2"
        >
          Technical Skills
          <span className="text-purple-400">▶</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#252525] p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-purple-400 w-6 h-6" />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div className="text-gray-300">
              {technicalSkills.languages.join(', ')}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#252525] p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-purple-400 w-6 h-6" />
              <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
            </div>
            <div className="text-gray-300">
              {technicalSkills.frameworks.join(', ')}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.article>
  )
}

