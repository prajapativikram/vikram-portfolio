import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "ChatGPT Clone",
      description:
        "AI-powered conversational web application built with OpenAI API, featuring real-time chat capabilities and modern UI design.",
      technologies: ["React", "Node.js", "Gemini API", "JavaScript"],
      status: "Completed",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      icon: "🤖",
    },
    {
      title: "Smart Education Platform",
      description:
        "Innovative education solution for rural communities featuring AR/VR modules and interactive learning tools.",
      technologies: ["React", "Firebase", "Python", "AR/VR"],
      status: "Completed",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: "📚",
    },
    {
      title: "Memory Master Game",
      description:
        "Interactive Simon game clone designed to improve memory retention with progressive difficulty levels.",
      technologies: ["JavaScript", "HTML", "CSS", "Game Dev"],
      status: "Completed",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
      icon: "🎮",
    },
    {
      title: "Digital Portfolio",
      description:
        "Responsive portfolio website built with Next.js and TypeScript to showcase skills and projects professionally.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      status: "Completed",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: "💼",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full mb-6">
              + PROJECTS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Colored placeholder instead of image */}
                  <div
                    className={`w-full h-full ${project.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">{project.icon}</div>
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Ongoing" ? "default" : "secondary"}
                      className={project.status === "Ongoing" ? "bg-purple-600" : "bg-slate-700"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-slate-600 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

