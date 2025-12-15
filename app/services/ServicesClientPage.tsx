"use client"

import React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Truck, HardHat, ClipboardCheck, Wrench, MessageSquare, Cog, Zap, CheckCircle2 } from "lucide-react"
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

export default function ServicesClientPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary/35 z-10" />
        <Image src="/construction-services-concrete-work.jpg" alt="Our Services" fill className="object-cover" />
        <motion.div
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance drop-shadow-lg">Our Services</h1>
          <p className="text-xl text-white mb-0 max-w-2xl mx-auto text-balance drop-shadow-md">
            Comprehensive concrete solutions from manufacturing to installation
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Truck className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Ready-Mixed Concrete (รถผสมพร้อมบริการ)</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Fresh, quality concrete delivered directly to your construction site with our modern fleet of
                          ready-mix trucks. We ensure timely delivery and consistent quality for all your concrete
                          needs.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• On-site delivery service</li>
                          <li>• Various concrete grades available</li>
                          <li>• Modern mixing equipment</li>
                          <li>• Quality control testing</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HardHat className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Concrete Installation (การติดตั้งเสาเข็ม)</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Professional installation services for concrete piles and foundation work. Our experienced
                          team ensures proper installation following industry best practices and safety standards.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Expert installation team</li>
                          <li>• Modern equipment and tools</li>
                          <li>• Safety compliance</li>
                          <li>• Project management support</li>
                        </ul>
                      </div>
                    </div>
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ClipboardCheck className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Engineering Consultation</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Technical consultation and engineering support for your foundation design and concrete
                          requirements. Our experts help you choose the right solutions for your project.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Foundation design advice</li>
                          <li>• Product selection guidance</li>
                          <li>• Technical specifications</li>
                          <li>• Load calculation support</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Wrench className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Tailored concrete products and services to meet your specific project requirements. We work
                          closely with clients to deliver customized solutions that fit unique construction needs.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Custom product design</li>
                          <li>• Special specifications</li>
                          <li>• Project-specific solutions</li>
                          <li>• Flexible manufacturing</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple and efficient workflow to serve you better
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: "Consultation", desc: "Discuss your project requirements and needs" },
              { icon: Cog, title: "Planning", desc: "Design solutions and prepare specifications" },
              { icon: Zap, title: "Production", desc: "Manufacture products to quality standards" },
              { icon: CheckCircle2, title: "Delivery", desc: "Install and deliver on schedule" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div className="text-center" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.createElement(item.icon, { className: "h-10 w-10 text-primary" })}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Contact us today to discuss your project and receive a detailed quote
            </p>
            <Button asChild size="lg" className="transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link href="/contact">Request Service Quote</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
