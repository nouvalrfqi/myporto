'use client'
import Link from "next/link"

// components/Footer.tsx
import {
    Linkedin,
    Github,
    Mail,
  } from "lucide-react";

const navItems = [
    { label: "Bio", href: "#bio" },
    { label: "Areas of Interest", href: "#interest" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ]
  export default function Footer() {
    return (
      <footer className="bg-black text-white border border-black rounded-xl">
        <div className="max-w-7xl mx-auto px-6 py-10 relative">
        <div className="text-2xl font-bold pb-5">👋 Let's Connect</div>
          {/* Konten */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 border-t border-gray-700 pt-12">
            {/* Kiri - Logo & Deskripsi & Social */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">M.NOUVAL R</div>
              <p className="text-sm text-gray-300">
              Crafting digital experiences with code, creativity, and curiosity. Let's build something meaningful together.
              </p>
              <div className="flex gap-4 text-gray-400">
                <Link href="https://www.linkedin.com/in/muhammad-nouval-rifqi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="hover:text-white cursor-pointer" />
                </Link>
                <Link href="https://github.com/nouvalrfqi" target="_blank" rel="noopener noreferrer">
                  <Github className="hover:text-white cursor-pointer" />
                </Link>
                <Link href="mailto:m.nouvalrfqi@gmail.com">
                  <Mail className="hover:text-white cursor-pointer" />
                </Link>
              </div>
            </div>
  
                  {/* Navigasi */}
          <div>
            <h4 className="text-orange-400 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    scroll={true}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  
            {/* Kontak */}
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+62 8998 768 253</li>
                <li>m.nouvalrfqi@gmail.com</li>
                <li>Banda Aceh, Indonesia</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
            <p>Copyright© 2025 Nouval. All Rights Reserved.</p>
            <p>
              <span className="hover:underline cursor-pointer">
                User Terms & Conditions
              </span>{" "}
              |{" "}
              <span className="hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
