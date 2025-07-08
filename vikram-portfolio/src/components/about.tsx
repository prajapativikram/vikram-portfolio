import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Calendar, Globe, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full mb-6">
              + ABOUT ME
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Hi! I&apos;m Vikram Kumar</h2>
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-8">CSE Student</p>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              I&apos;m a passionate and results-driven Computer Science and Engineering student with expertise in
              programming, web development, AI/ML, and software engineering. Strong collaborator and advocate for
              innovative solutions. Seeking new opportunities to create impactful digital products.
            </p>
          </div>

          {/* Contact Information Grid - All in one row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
            {/* Contact */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Contact</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm break-all">vikramgangjori@gmail.com</span>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Phone</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 9102430603</span>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Status</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Student</span>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Languages</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">English, Hindi</span>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Interests</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Heart className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Coding, AI/ML, Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
