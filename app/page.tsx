"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Truck, Shield, Clock } from "lucide-react"
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

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary/35 z-10" />
        <Image
          src="/construction-site-with-concrete-piles-and-heavy-ma.jpg"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Professional Concrete Piling Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto text-balance drop-shadow-md">
            Leading manufacturer of quality precast concrete products for construction and engineering excellence
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link href="/products">View Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <Link href="/contact">Request Quote</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Quality Products",
                description: "Premium precast concrete piles manufactured to the highest standards",
              },
              {
                icon: Truck,
                title: "Ready-Mixed Concrete",
                description: "Fresh concrete delivered on-site with our modern fleet",
              },
              {
                icon: Shield,
                title: "Professional Installation",
                description: "Expert installation services with experienced team",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "On-time delivery and reliable service for your projects",
              },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Samco - Samakee Concrete Products</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We are a leading manufacturer specializing in concrete piling products and foundation solutions. With
                  years of experience and expertise in the construction industry, we deliver reliable and high-quality
                  precast concrete products.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our commitment to excellence and customer satisfaction has made us a trusted partner for construction
                  projects across Thailand. We combine modern technology with proven manufacturing processes to ensure
                  superior quality.
                </p>
                <Button asChild size="lg" className="transition-all hover:scale-[1.02] hover:shadow-lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/concrete-manufacturing-facility-with-piles.jpg"
                  alt="Samco facilities"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                High-quality precast concrete piling products for various construction applications
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/double-halfmoon-concrete-piles-stacked.jpg",
                title: "Double Halfmoon",
                description: "High-strength precast concrete piles ideal for deep foundation work",
                href: "/products#double-halfmoon",
              },
              {
                image: "/square-concrete-piles-uniform.jpg",
                title: "Square Piles",
                description: "Versatile square-section piles for various foundation applications",
                href: "/products#square",
              },
              {
                image: "/short-concrete-piles-construction.jpg",
                title: "Short Piles",
                description: "Compact piles suitable for shallow to medium depth foundations",
                href: "/products#short",
              },
            ].map((product, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-64 overflow-hidden">
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full bg-transparent transition-all hover:scale-[1.02]"
                      >
                        <Link href={product.href}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="transition-all hover:scale-[1.02] hover:shadow-lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 text-balance">
              Contact us today for a consultation and quote on your construction needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <Link href="/brochure">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
