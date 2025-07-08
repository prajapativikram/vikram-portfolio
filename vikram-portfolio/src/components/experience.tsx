import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Building } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "OctaNet Services Pvt Ltd",
      duration: "June 2024 - July 2024",
      location: "Remote",
      description: [
        "Developed and enhanced three core features (invoice, credit note, payment request) using layered architecture for scalability",
        "Implemented an asynchronous ATM machine simulation applying Java and OOP principles",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
      ],
      technologies: ["Java", "OOP", "Layered Architecture", "Asynchronous Programming"],
      icon: "☕",
    },
    {
      title: "AI & Cloud Computing Intern",
      company: "Edunet Foundation (in Collaboration with IBM)",
      duration: "May 2024 - July 2024",
      location: "Remote",
      description: [
        "Deployed ten AI models on IBM Cloud, leveraging Watson Studio and Kubernetes",
        "Optimized predictive accuracy by 15% and reduced inference latency by 20 milliseconds",
        "Addressed critical performance bottlenecks in AI model deployment",
        "Gained hands-on experience with cloud computing and AI/ML technologies",
      ],
      technologies: ["IBM Cloud", "Watson Studio", "Kubernetes", "AI/ML", "Python"],
      icon: "🤖",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full mb-6">
              + EXPERIENCE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-gray-600 text-lg">My internship experiences and professional development journey</p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                        {exp.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-purple-600 font-semibold mb-2">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-purple-100 text-purple-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
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