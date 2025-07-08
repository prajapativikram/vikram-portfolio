import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/prajapativikram", // Replace with your actual GitHub URL
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vikram-kumar-0b19a9248/", // Replace with your actual LinkedIn URL
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      href: "hhttps://x.com/VIKRAMK70498044", // Replace with your actual Twitter URL
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vk_vikram2309/", // Replace with your actual Instagram URL
      label: "Instagram",
      color: "hover:bg-pink-500",
    },
    {
      icon: Mail,
      href: "mailto:vikramgangjori@gmail.com",
      label: "Email",
      color: "hover:bg-red-500",
    },
  ]

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon
        return (
          <Link
            key={index}
            href={social.href}
            target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
            className={`w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg group`}
            aria-label={social.label}
          >
            <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        )
      })}
    </div>
  )
}
