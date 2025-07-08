import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, School } from 'lucide-react'

export function Education() {
  const timeline = [
    {
      year: "2023 - Present",
      title: "B.Tech Computer Science & Engineering",
      description:
        "Dr. B. C. Roy Engineering College is an educational institution that offers undergraduate, professional, and research programs in the fields of engineering and technology.",
      institution: "Dr. B. C. Roy Engineering College, Durgapur",
      icon: GraduationCap,
      grade: "CGPA: 8.36",
    },
    {
      year: "2020 - 2022",
      title: "Intermediate (PCM-CS)",
      description:
        "S L Arya Inter College is an educational institution that offers intermediate education with focus on Physics, Chemistry, Mathematics and Computer Science.",
      institution: "S L Arya Inter College, Bokaro",
      icon: School,
      grade: "93%",
    },
    {
      year: "2019 - 2020",
      title: "Matriculation",
      description:
        "Saraswati Shishu Vidya Mandir is an educational institution that offers quality primary and secondary education with strong academic foundation.",
      institution: "Saraswati Shishu Vidya Mandir, Bokaro",
      icon: Award,
      grade: "90%",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full mb-6">
              + LIFE TIME
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Education & Experience</h2>
            <p className="text-gray-600 text-lg">My academic journey and professional development milestones</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-white border-4 border-purple-200 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <span className="text-yellow-500 font-semibold text-sm">{item.year}</span>
                          <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                        </div>
                        <Badge variant="secondary" className="mt-2 md:mt-0">
                          {item.grade}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                      <p className="text-slate-900 font-semibold">{item.institution}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}