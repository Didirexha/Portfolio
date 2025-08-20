"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Briefcase,
  Users,
  Award,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "services", "projects", "agency", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-yellow-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-500" },
    { name: "React", level: 95, color: "bg-cyan-500" },
    { name: "Next.js", level: 90, color: "bg-black" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "MongoDB", level: 85, color: "bg-green-600" },
    { name: "PostgreSQL", level: 80, color: "bg-blue-700" },
  ]

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
    },
    {
      icon: Database,
      title: "CRM Systems",
      description: "Customer relationship management systems tailored to your business needs",
      features: ["Lead Management", "Sales Pipeline", "Analytics", "Automation"],
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end development solutions from frontend to backend",
      features: ["API Development", "Database Design", "Cloud Deployment", "Maintenance"],
    },
    {
      icon: Briefcase,
      title: "Business Solutions",
      description: "Complete digital transformation for your business operations",
      features: ["Process Automation", "Digital Strategy", "System Integration", "Consulting"],
    },
  ]

  const projects = [
    {
      name: "Poliklinika Medical Center",
      description: "Professional healthcare website with appointment booking and department management system",
      technologies: ["React", "Next.js", "Tailwind CSS", "Healthcare"],
      url: "https://poliklinikaa.netlify.app/",
      category: "Healthcare",
      image: "klinika.jpg",
    },
    {
      name: "Carte du Jour Restaurant",
      description: "Elegant restaurant website with menu showcase and online reservation system",
      technologies: ["React", "JavaScript", "CSS3", "Restaurant"],
      url: "https://cartedujour.netlify.app/",
      category: "Restaurant",
      image: "lounge.jpg",
    },
    {
      name: "Programming Education Platform",
      description: "Educational platform for programming courses and tutorials with interactive features",
      technologies: ["React", "JavaScript", "Education", "Interactive"],
      url: "https://programuesiiveturave.netlify.app/",
      category: "Education",
      image: "car.jpg",
    },
    {
      name: "GardenFix Landscaping",
      description: "Professional landscaping and garden services website with portfolio showcase",
      technologies: ["React", "Next.js", "Tailwind CSS", "Business"],
      url: "https://gardenfix.netlify.app/",
      category: "Business",
      image: "green.jpg",
    },
    {
      name: "Nexora Agency",
      description: "Digital agency website showcasing services, portfolio, and client testimonials",
      technologies: ["React", "Next.js", "TypeScript", "Agency"],
      url: "https://nexoragency.netlify.app/",
      category: "Agency",
      image: "nexora.jpg",
    },
  ]

  // Add state for contact form
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  // Handle input changes
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  // Handle form submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phone = "38348222209" // WhatsApp number without + or spaces
    const text = `Name: ${contact.firstName} ${contact.lastName}%0AEmail: ${contact.email}%0ASubject: ${contact.subject}%0AMessage: ${contact.message}`
    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Didi Rexha</div>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Services", "Projects", "Agency", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Full-Stack Developer &<span className="text-primary"> Digital Innovator</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  I create exceptional digital experiences through modern web technologies and innovative solutions.
                  Founder of Nexora Agency, specializing in websites, CRM systems, and business automation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/Didirexha"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="une.jpg"
                    alt="Didi Rexha"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full">
                  <Code className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate full-stack developer with expertise in modern web technologies and a proven track record of
              delivering exceptional digital solutions for businesses worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>4+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Extensive experience in full-stack development, working with startups and enterprises.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>10+ Projects Delivered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Successfully completed projects ranging from simple websites to complex enterprise solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Agency Founder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Founded Nexora Agency, providing comprehensive digital solutions to businesses globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">Proficient in modern technologies and frameworks</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive digital solutions for your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">A showcase of my recent work and contributions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="h-full group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                      Live
                    </div>
                  </div>
                  <Button asChild className="w-full bg-transparent" variant="outline">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      View Live Site
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="https://github.com/Didirexha">
                View All Projects on GitHub <Github className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section id="agency" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nexora Agency</h2>
            <p className="text-xl text-muted-foreground">Your partner in digital transformation and business growth</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Transforming Businesses Through Technology</h3>
                <p className="text-muted-foreground">
                  Nexora Agency specializes in creating cutting-edge digital solutions that drive business growth. From
                  custom websites to complex CRM systems, we deliver excellence in every project.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="https://nexoragency.netlify.app/">
                  Visit Nexora Agency <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                     <img src="Logo.jpg" alt="" /> 
                    </div>
                    <div>
                      <h4 className="font-semibold">Nexora Agency</h4>
                      <p className="text-sm text-muted-foreground">Digital Solutions Provider</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Website Development</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CRM Systems</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Business Automation</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Digital Consulting</span>
                      <Badge>Active</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? Let's discuss how I can help you achieve your goals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">rexhadidi1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+383 48 222 209</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Available Worldwide</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Follow Me</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Didirexha"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/didi-rexha-690895259/"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:contact@example.com"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input name="firstName" placeholder="Name" value={contact.firstName} onChange={handleContactChange} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input name="lastName" placeholder="Last Name" value={contact.lastName} onChange={handleContactChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input name="email" type="email" placeholder="Email" value={contact.email} onChange={handleContactChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input name="subject" placeholder="Project Inquiry" value={contact.subject} onChange={handleContactChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea name="message" placeholder="Tell me about your project..." className="min-h-[120px]" value={contact.message} onChange={handleContactChange} />
                </div>
                <Button className="w-full" type="submit">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground">© 2024 Didi Rexha. All rights reserved.</div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="https://github.com/Didirexha"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://nexoragency.netlify.app/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Nexora Agency
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <Button
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg"
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="h-4 w-4 rotate-180" />
      </Button>
    </div>
  )
}
