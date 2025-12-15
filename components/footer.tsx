import Link from "next/link"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative w-40 h-12 mb-4 brightness-0 invert">
              <Image
                src="/images/samco-piling-logoz-z629740385587.webp"
                alt="Samco Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-4">SAMCO</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">Samakee Concrete Products Co., Ltd.</p>
            <p className="text-sm text-primary-foreground/80 mt-2 leading-relaxed">
              Leading manufacturer of quality precast concrete piling products for construction and engineering
              projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Ready-Mixed Concrete</li>
              <li>Concrete Installation</li>
              <li>Precast Concrete Piles</li>
              <li>Foundation Solutions</li>
              <li>Engineering Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Thailand</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+66"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +66 (0) XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@samco-piling.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@samco-piling.com
                </a>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Samco - Samakee Concrete Products Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
