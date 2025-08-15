"use client"

import { Button } from "@/components/ui/button"
import { Download, User } from "lucide-react"

export function Hero() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv/Vikram_Kumar_Resume_CSE.pdf"
    link.download = "/cv/Vikram_Kumar_Resume_CSE.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-yellow-400 text-lg font-medium">Hi! I&apos;m Vikram Kumar</p>
              <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                Computer Science &
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
                  Engineering Student
                </span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
                Results-driven CSE student with expertise in full-stack development, AI/ML, and software engineering.
                Passionate about creating innovative solutions that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium">
                <User className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full font-medium bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">8.48</div>
                <div className="text-gray-400 text-sm">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">6+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">2+</div>
                <div className="text-gray-400 text-sm">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

