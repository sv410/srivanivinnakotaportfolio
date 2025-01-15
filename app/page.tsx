'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import About from '@/components/sections/About'
import Resume from '@/components/sections/Resume'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Sidebar from '@/components/Sidebar'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <Sidebar />
        
        <main className="lg:w-3/4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TabsContent value="about">
                <About />
              </TabsContent>

              <TabsContent value="resume">
                <Resume />
              </TabsContent>

              <TabsContent value="projects">
                <Projects />
              </TabsContent>

              <TabsContent value="certifications">
                <Certifications />
              </TabsContent>

              <TabsContent value="contact">
                <Contact />
              </TabsContent>
            </motion.div>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

