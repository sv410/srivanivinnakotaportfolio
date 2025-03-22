'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

export default function Sidebar() {
  const handleResumeClick = () => {
    // The PDF should be stored in the public folder
    window.open('/Srivani91_resume.pdf', '_blank')
  }

  return (
    <aside className="lg:w-1/4">
      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 sticky top-8 border border-purple-500/20">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-purple-500/20">
            <Image
              src="/srivaniprofile.jpg"
              alt="Srivani Vinnakota"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-purple-300">Srivani Vinnakota</h1>
          <p className="text-purple-400 mb-6">Software Engineer</p>
          
          <div className="space-y-3 w-full">
            <button
              onClick={handleResumeClick}
              className="flex items-center p-2 w-full hover:bg-purple-500/10 rounded-lg transition-colors"
            >
              <FileText className="h-5 w-5 mr-3 text-purple-400" />
              <span className="text-sm text-purple-200">View Resume</span>
            </button>
            <a href="mailto:srivanivinnakota91@gmail.com" className="flex items-center p-2 hover:bg-purple-500/10 rounded-lg transition-colors">
              <Mail className="h-5 w-5 mr-3 text-purple-400" />
              <span className="text-sm text-purple-200">srivanivinnakota91@gmail.com</span>
            </a>
            <a href="https://github.com/sv410" className="flex items-center p-2 hover:bg-purple-500/10 rounded-lg transition-colors">
              <Github className="h-5 w-5 mr-3 text-purple-400" />
              <span className="text-sm text-purple-200">github</span>
            </a>
            <a href="https://linkedin.com/in/Srivanivinnakota4" className="flex items-center p-2 hover:bg-purple-500/10 rounded-lg transition-colors">
              <Linkedin className="h-5 w-5 mr-3 text-purple-400" />
              <span className="text-sm text-purple-200">linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}