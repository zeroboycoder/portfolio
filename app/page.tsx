import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Github,
  Calendar,
  Award,
  Code,
  Database,
  Server,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
   "Languages & Frameworks": ["JavaScript", "TypeScript", "React.js", "Vue.js", "Node.js", "ExpressJs", "NestJS"],
    "API Technologies": ["RESTful API", "GraphQL", "WebSockets (Socket.io)"],
    "Messaging & Queues": ["BullMQ", "RabbitMQ"],
    Databases: ["MySQL", "PostgreSQL", "MongoDB"],
    ORM : ["Prisma", "Sequelize", "Mongoose"],
    "DevOps & Tools": ["Docker","Git", "Redis", "Firebase", "Elasticsearch"],
    Others: ["Web3", "Blockchain (basic)", "Microservices Architecture"],
  }

  const experiences = [
    {
      company: "Joy International Company",
      role: "Backend Developer",
      period: "Apr 2023 – Present",
      achievements: [
        "Food Delivery Platform - Engineered comprehensive geolocation-based features including nearby restaurant search, route optimization, cart management, and food variants handling system.",
        "One Site Ads Platform - Built scalable backend services for a Canva-like dynamic ads generator with complex subscription logic, template management, and complete ad lifecycle handling.",
      ],
    },
    {
      company: "JOBDOH, Hong Kong",
      role: "Fullstack Web Developer",
      period: "Sep 2022 – Apr 2023",
      achievements: [
        "Built Web3 HR & Fintech app with Vue.js, Node.js, MongoDB, GraphQL",
        "Integrated blockchain for HR identity and payment systems",
      ],
    },
    {
      company: "Simbolo, Myanmar",
      role: "Tech Executive (Part-Time)",
      period: "Nov 2022 – Feb 2023",
      achievements: [
        "Developed and maintained Simbolo's official website",
        "Mentored students in software development and IT career planning",
      ],
    },
    {
      company: "Kopwar, Myanmar",
      role: "Mobile Developer",
      period: "Apr 2022 – Sep 2022",
      achievements: [
        "Created UI and integrated APIs using Flutter for E-commerce mobile app",
        "Collaborated with backend team to refine checkout and product modules",
      ],
    },
  ]

  const projects = [
    {
      title: "Onesite Ads Builder",
      description: "Backend infrastructure for ad templating platform",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Food Delivery System",
      description: "Real-time restaurant search and optimized delivery routes",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Web3 HR Platform",
      description: "Fullstack decentralized HR application",
      icon: <Database className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">Pyae Sone Khant</h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/zeroboycoder" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="mailto:pyaesonekhant.contact@protonmail.com">Contact Me</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center animate-fade-in relative">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-yellow-500 animate-spin-slow" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Backend Web Developer
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-500">
              Resourceful and detail-oriented Backend Web Developer with over 3 years of experience building scalable
              backend systems, RESTful and GraphQL APIs, and real-time solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-700 mb-8 animate-slide-up animation-delay-1000">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Vietnam</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200">
              <Phone className="w-5 h-5 text-green-500" />
              <span>+84 772 453 001</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200">
              <Phone className="w-5 h-5 text-green-500" />
              <span>+95 976 470 4270</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>pyaesonekhant.contact@protonmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 animate-slide-up animation-delay-1500">
            <Button
              variant="outline"
              asChild
              className="border-blue-200 hover:border-blue-400 hover:scale-105 transition-all duration-200 bg-white/60 backdrop-blur-sm"
            >
              <Link href="https://github.com/zeroboycoder" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Link href="https://www.linkedin.com/in/pyae-sone-khant/" target="_blank">
                <Globe className="w-4 h-4 mr-2" />
                LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Technical Skills */}
        <section className="mb-16 mt-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-700">{exp.role}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Notable Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Notable Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">{project.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Achievements</h2>
          <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">3rd Prize Winner</CardTitle>
              <CardDescription className="text-lg">Digital Entrepreneurship & Innovation</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600">
                New Next University Hackathon Competition - Recognized for innovation and feasibility of the product
                concept
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Languages</h2>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-lg">Burmese</h3>
              <p className="text-slate-600">Native</p>
            </div>
            <Separator orientation="vertical" className="h-12" />
            <div className="text-center">
              <h3 className="font-semibold text-lg">English</h3>
              <p className="text-slate-600">Professional Proficiency</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Work Together</CardTitle>
              <CardDescription>Ready to build something amazing? Get in touch!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link href="mailto:pyaesonekhant.contact@protonmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="tel:+959764704270">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Me
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">© 2025 Pyae Sone Khant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
