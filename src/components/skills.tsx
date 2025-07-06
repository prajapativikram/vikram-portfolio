import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "Data Structure & Algorithms","Design & Analysis of Algorithms", "C", "C++"],
      icon: "💻",
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React", "Next.js","JavaScript", "TypeScript", "Node.js", "React Native"],
      icon: "🌐",
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB", "PostgreSQL"],
      icon: "🗄️",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "IBM Watson", "Kubernetes"],
      icon: "🤖",
    },
    {
      title: "Tools & Frameworks",
      skills: ["Git", "GitHub", "VS Code", "Bootstrap", "Tailwind CSS", "Postman"],
      icon: "🛠️",
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Critical Thinking","Communication Skills","Self-Discipline","Assertive","Dedicated","Work Ethics","Adaptability"],
      icon: "🧠",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full mb-6">+ SKILLS</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, programming languages, and tools I use to build amazing
            projects.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors group"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-slate-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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