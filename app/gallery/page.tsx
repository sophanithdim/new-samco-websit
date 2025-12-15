"use client"

import type React from "react"

import Image from "next/image"
import { useState, useRef } from "react"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

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

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      category: "Manufacturing",
      title: "Concrete Pile Production",
      src: "/concrete-pile-production-factory-floor.jpg",
    },
    {
      id: 2,
      category: "Manufacturing",
      title: "Quality Control",
      src: "/quality-control-testing-concrete.jpg",
    },
    {
      id: 3,
      category: "Installation",
      title: "Pile Installation",
      src: "/pile-driving-installation-site.jpg",
    },
    {
      id: 4,
      category: "Installation",
      title: "Foundation Work",
      src: "/foundation-work-construction-site.jpg",
    },
    {
      id: 5,
      category: "Products",
      title: "Double Halfmoon Piles",
      src: "/double-halfmoon-concrete-piles-stacked.jpg",
    },
    {
      id: 6,
      category: "Products",
      title: "Square Piles",
      src: "/square-concrete-piles-yard.jpg",
    },
    {
      id: 7,
      category: "Equipment",
      title: "Ready-Mix Trucks",
      src: "/concrete-mixer-trucks-fleet.jpg",
    },
    {
      id: 8,
      category: "Equipment",
      title: "Modern Machinery",
      src: "/heavy-machinery-construction-equipment.jpg",
    },
    {
      id: 9,
      category: "Projects",
      title: "Commercial Project",
      src: "/commercial-construction-site-aerial.jpg",
    },
    {
      id: 10,
      category: "Projects",
      title: "Residential Development",
      src: "/residential-development-foundation.jpg",
    },
    {
      id: 11,
      category: "Projects",
      title: "Industrial Complex",
      src: "/industrial-complex-foundation-work.jpg",
    },
    {
      id: 12,
      category: "Projects",
      title: "Infrastructure Work",
      src: "/infrastructure-construction-project.jpg",
    },
  ]

  return (
    <div>
      {/* Hero with Floating Title */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary/35 z-10" />
        <Image src="/construction-gallery-showcase.jpg" alt="Gallery" fill className="object-cover" />
        <motion.div
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            Project Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance drop-shadow-md">
            Explore our work, products, and manufacturing capabilities
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 0.05}>
                <motion.div
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs text-white/80 mb-1">{image.category}</p>
                      <p className="text-sm font-semibold text-white">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].title}
              width={1200}
              height={900}
              className="object-contain max-h-full"
            />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-sm text-white/80 mb-1">{galleryImages[selectedImage].category}</p>
              <p className="text-lg font-semibold text-white">{galleryImages[selectedImage].title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
