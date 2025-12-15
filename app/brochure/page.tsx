"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, CheckCircle2 } from "lucide-react"
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

export default function BrochurePage() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/samco-company-brochure.pdf" // This would be your actual PDF file in the public folder
    link.download = "Samco-Company-Brochure-2024.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary/35 z-10" />
        <Image src="/corporate-brochure-business-documents.jpg" alt="Company Brochure" fill className="object-cover" />
        <motion.div
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            Company Brochure
          </h1>
          <p className="text-xl text-white mb-0 max-w-2xl mx-auto text-balance drop-shadow-md">
            Download comprehensive information about our products and services
          </p>
        </motion.div>
      </section>

      {/* Brochure Preview Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Brochure Preview</h2>
              <p className="text-lg text-muted-foreground">See what's inside our company brochure before downloading</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                page: 1,
                title: "Cover & Company Overview",
                image: "/brochure-page-1-cover.jpg",
              },
              {
                page: 2,
                title: "About Samco",
                image: "/brochure-page-2-about.jpg",
              },
              {
                page: 3,
                title: "Product Catalog",
                image: "/brochure-page-3-products.jpg",
              },
              {
                page: 4,
                title: "Services Overview",
                image: "/brochure-page-4-services.jpg",
              },
              {
                page: 5,
                title: "Project Portfolio",
                image: "/brochure-page-5-projects.jpg",
              },
              {
                page: 6,
                title: "Contact Information",
                image: "/brochure-page-6-contact.jpg",
              },
            ].map((preview, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.3 }}
                  onClick={handleDownload}
                >
                  <Card className="overflow-hidden">
                    <div className="relative aspect-[3/4] bg-muted">
                      <Image
                        src={preview.image || "/placeholder.svg"}
                        alt={preview.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                        Page {preview.page}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-center">{preview.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">Click any preview to download the full brochure</p>
            <Button size="lg" onClick={handleDownload} className="transition-all hover:scale-[1.02] hover:shadow-lg">
              <Download className="h-5 w-5 mr-2" />
              Download Full Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Brochure Preview */}
            {/* Removed redundant brochure preview section */}
            {/* <AnimatedSection>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative aspect-[3/4] bg-muted">
                    <Image src="/professional-construction-company-brochure-cover.jpg" alt="Samco Brochure" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">PDF Format • 12 Pages • 5.2 MB</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection> */}

            {/* Brochure Info */}
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Samco Company Brochure 2024</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Download our comprehensive company brochure to learn more about Samco - Samakee Concrete Products.
                  This detailed document contains everything you need to know about our products, services, and
                  capabilities.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">What's Inside:</h3>
                  <ul className="space-y-3">
                    {[
                      "Complete product catalog with specifications",
                      "Detailed service offerings and capabilities",
                      "Company history and core values",
                      "Manufacturing process and quality control",
                      "Project portfolio and case studies",
                      "Technical specifications and standards",
                      "Contact information and locations",
                      "Certifications and quality assurance",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {/* Removed redundant download button */}
                  {/* <Button
                    size="lg"
                    className="w-full transition-all hover:scale-[1.02] hover:shadow-lg"
                    onClick={handleDownload}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Company Brochure (PDF)
                  </Button> */}
                  <p className="text-sm text-center text-muted-foreground">
                    Company profile, services, and project experience
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-lg text-muted-foreground">More information to help you learn about our offerings</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Specifications",
                description: "Detailed technical specifications for all our concrete products",
                file: "product-specifications.pdf",
              },
              {
                title: "Installation Guide",
                description: "Best practices and guidelines for concrete pile installation",
                file: "installation-guide.pdf",
              },
              {
                title: "Safety Manual",
                description: "Safety procedures and protocols for working with our products",
                file: "safety-manual.pdf",
              },
            ].map((resource, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="transition-all hover:scale-[1.02] bg-transparent"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = `/${resource.file}`
                          link.download = resource.file
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        }}
                      >
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
