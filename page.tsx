import Image from 'next/image'
import { Github, Linkedin, Mail, FileText, Twitter, Instagram, TextIcon as Telegram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <div className="bg-zinc-900 rounded-lg p-6 sticky top-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Srivani Vinnakota"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">Srivani Vinnakota</h1>
              <p className="text-blue-400 mb-6">AI Engineer & Web Developer</p>
              
              {/* Resume Button */}
              <Button variant="outline" className="w-full mb-4">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>

              {/* Contact Links */}
              <div className="space-y-3 w-full">
                <a href="mailto:srivanivinnakota91@gmail.com" 
                   className="flex items-center p-2 hover:bg-zinc-800 rounded-md transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-sm">srivanivinnakota91@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/Srivanivinnakota4" 
                   className="flex items-center p-2 hover:bg-zinc-800 rounded-md transition-colors">
                  <Linkedin className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-sm">srivanivinnakota4</span>
                </a>
                <a href="https://github.com/Srivanivinnakota4" 
                   className="flex items-center p-2 hover:bg-zinc-800 rounded-md transition-colors">
                  <Github className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-sm">srivanivinnakota4</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Telegram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="bg-zinc-900 text-white mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Computer Science Engineering student specializing in Data Science at Anurag University. 
                    Completed multiple certifications including AWS Certified Cloud Practitioner and Cisco 
                    Cybersecurity Specialist. Passionate about AI, web development, and solving complex problems.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">What I'm Doing</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-900 border-zinc-800">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                          <div className="text-blue-400 text-2xl">🤖</div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
                        <p className="text-gray-400">
                          Developing ML models and implementing data science solutions using Python and TensorFlow.
                        </p>
                      </div>
                    </Card>

                    <Card className="bg-zinc-900 border-zinc-800">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                          <div className="text-blue-400 text-2xl">💻</div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-400">
                          Creating modern web applications using React, Next.js, and other cutting-edge technologies.
                        </p>
                      </div>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-900 border-zinc-800">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Languages</h3>
                        <p className="text-gray-400">
                          C/C++, Python, Java, JavaScript, TypeScript, SQL, R
                        </p>
                      </div>
                    </Card>

                    <Card className="bg-zinc-900 border-zinc-800">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Frameworks & Libraries</h3>
                        <p className="text-gray-400">
                          React, NumPy, Pandas, Flask, ASP.NET Core, Entity Framework Core
                        </p>
                      </div>
                    </Card>
                  </div>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="resume">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-6">Education</h2>
                  <Card className="bg-zinc-900 border-zinc-800">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">Anurag University</h3>
                      <p className="text-blue-400">2022 - 2026</p>
                      <p className="text-gray-400 mt-2">
                        B.Tech in Computer Science Engineering (Data Science) - GPA: 7.98
                      </p>
                    </div>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Experience</h2>
                  <div className="space-y-4">
                    <Card className="bg-zinc-900 border-zinc-800">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold">Meta (Swecha Telangana)</h3>
                        <p className="text-blue-400">Software Engineer Intern • May 2024 - June 2024</p>
                        <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                          <li>Developed and optimized a Telugu LLM for natural language understanding</li>
                          <li>Used Python, TensorFlow, PyTorch, spaCy and NLTK for NLP</li>
                        </ul>
                      </div>
                    </Card>
                  </div>
                </section>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

