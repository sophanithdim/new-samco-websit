"use client"

import React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Award, Users, Lightbulb } from "lucide-react"
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

export default function AboutClientPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary/35 z-10" />
        <Image src="/professional-construction-team-working.jpg" alt="About Samco" fill className="object-cover" />
        <motion.div
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance drop-shadow-lg">About Samco</h1>
          <p className="text-xl text-white mb-0 max-w-2xl mx-auto text-balance drop-shadow-md">
            Building strong foundations with quality and expertise
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Samakee Concrete Products Co., Ltd.
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Samco - Samakee Concrete Products is a trusted manufacturer of high-quality precast concrete piling
                  products. We have been serving the construction and engineering industry with dedication and
                  expertise.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our company specializes in manufacturing a wide range of concrete products including precast concrete
                  piles, ready-mixed concrete, and foundation solutions. We pride ourselves on delivering products that
                  meet the highest quality standards and industry requirements.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With modern manufacturing facilities and experienced professionals, we ensure that every product meets
                  strict quality control measures and delivers exceptional performance in the field.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/modern-concrete-manufacturing-plant-facility.jpg"
                  alt="Samco manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our business and drive our success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Excellence",
                desc: "Committed to delivering the highest quality products that exceed industry standards",
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Building lasting relationships through exceptional service and support",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Continuously improving our processes and products with modern technology",
              },
              {
                icon: Target,
                title: "Reliability",
                desc: "Dependable service and on-time delivery for all your project needs",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          {React.createElement(item.icon, { className: "h-8 w-8 text-primary" })}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide the construction industry with superior quality precast concrete piling products and
                      foundation solutions, delivered with professionalism, reliability, and customer-focused service.
                      We strive to be the trusted partner for contractors, developers, and engineers in building strong
                      and lasting foundations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be recognized as the leading manufacturer of concrete piling products in Thailand, known for
                      our commitment to quality, innovation, and sustainability. We aim to continuously improve our
                      products and services to meet the evolving needs of the construction industry while maintaining
                      the highest standards of excellence.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
