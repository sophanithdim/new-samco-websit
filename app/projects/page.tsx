"use client"

import type React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Commercial Complex Foundation",
      location: "Bangkok",
      year: "2024",
      description: "Large-scale commercial development requiring deep foundation work with double halfmoon piles.",
      image: "/commercial-building-foundation-construction.jpg",
      details: ["1,200+ concrete piles installed", "Deep foundation to 25m", "Completed ahead of schedule"],
    },
    {
      title: "Residential Development",
      location: "Chiang Mai",
      year: "2023",
      description: "Multi-unit residential project with comprehensive piling and foundation solutions.",
      image: "/residential-construction-foundation-work.jpg",
      details: ["Square pile installation", "800+ units completed", "Quality certified"],
    },
    {
      title: "Industrial Warehouse",
      location: "Rayong",
      year: "2023",
      description: "Heavy-duty industrial warehouse requiring robust foundation systems.",
      image: "/industrial-warehouse-foundation-construction.jpg",
      details: ["High load-bearing capacity", "15,000 sqm facility", "Completed on budget"],
    },
    {
      title: "Infrastructure Project",
      location: "Phuket",
      year: "2022",
      description: "Public infrastructure development with specialized concrete requirements.",
      image: "/infrastructure-project-concrete-work.jpg",
      details: ["Custom concrete solutions", "Complex site conditions", "Government project"],
    },
  ]

  return (
    <div>
      {/* Hero with Floating Title */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary/35 z-10" />
        <Image src="/completed-construction-projects-showcase.jpg" alt="Our Projects" fill className="object-cover" />
        <motion.div
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance drop-shadow-lg">Our Projects</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance drop-shadow-md">
            Successful construction projects powered by quality concrete solutions
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-80">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      <ul className="space-y-2 text-sm">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">✓</span>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection delay={0}>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Piles Installed</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
