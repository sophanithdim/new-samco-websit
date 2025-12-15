"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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

export default function ProductsClientPage() {
  const products = [
    {
      id: "double-halfmoon",
      name: "Double Halfmoon Piles (เสาเข็ม I และ Double Halfmoon)",
      description:
        "High-strength precast concrete piles with double halfmoon cross-section, designed for heavy-load bearing and deep foundation applications. Ideal for large-scale construction projects requiring superior structural integrity.",
      features: [
        "High load-bearing capacity",
        "Durable concrete construction",
        "Suitable for deep foundations",
        "Various lengths available",
        "Quality tested for strength",
      ],
      image: "/double-halfmoon-concrete-piles-industrial.jpg",
    },
    {
      id: "square",
      name: "Square Piles (เสาเข็มรูปเหลี่ยม S)",
      description:
        "Versatile square-section precast concrete piles suitable for a wide range of foundation applications. These piles offer excellent structural performance and ease of installation for medium to heavy construction projects.",
      features: [
        "Uniform square cross-section",
        "Easy installation process",
        "Multiple size options",
        "Consistent quality",
        "Cost-effective solution",
      ],
      image: "/square-concrete-piles-construction-site.jpg",
    },
    {
      id: "short",
      name: "Short Piles (เสาเข็มสั้น)",
      description:
        "Compact precast concrete piles designed for shallow to medium depth foundations. Perfect for residential and light commercial construction where standard pile lengths are not required.",
      features: [
        "Compact length design",
        "Quick installation",
        "Suitable for shallow foundations",
        "Economical choice",
        "Reliable performance",
      ],
      image: "/short-concrete-piles-stacked-yard.jpg",
    },
    {
      id: "custom",
      name: "Custom Concrete Products",
      description:
        "We also manufacture custom precast concrete products tailored to your specific project requirements. Our experienced team can work with you to design and produce specialized concrete elements.",
      features: [
        "Customizable specifications",
        "Engineering consultation",
        "Project-specific designs",
        "Quality assurance",
        "Technical support",
      ],
      image: "/custom-concrete-products-manufacturing.jpg",
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary/35 z-10" />
        <Image src="/concrete-piles-production-line.jpg" alt="Our Products" fill className="object-cover" />
        <motion.div
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance drop-shadow-lg">Our Products</h1>
          <p className="text-xl text-white mb-0 max-w-2xl mx-auto text-balance drop-shadow-md">
            High-quality precast concrete piling products for construction excellence
          </p>
        </motion.div>
      </section>

      {/* Products List */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <div
                  id={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{product.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="transition-all hover:scale-[1.02] hover:shadow-lg">
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                  </div>
                  <motion.div
                    className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Need Custom Solutions?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Contact our team to discuss your specific project requirements
            </p>
            <Button asChild size="lg" className="transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
