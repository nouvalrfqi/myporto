'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Bio', href: '#bio' },
  { label: 'Areas of Interest', href: '#interest' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Competition', href: '#certificates' },
]

export default function OvalNavbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-[20px] bg-white/70 backdrop-blur-lg px-4 py-3 shadow-lg border-2 border-gray-400"
      >
        <ul className="flex items-center gap-6 text-black text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative rounded-[12px] px-4 py-2 transition duration-300 hover:bg-gray-300/80 hover:text-black font-bold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Hamburger */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-5 left-5 z-50"
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-white/80 border border-gray-400 p-2 rounded-full shadow-lg backdrop-blur-md"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-16 left-5 right-5 z-40 bg-white border border-gray-400 rounded-xl shadow-lg p-4 backdrop-blur-md"
          >
            <ul className="space-y-3 text-sm text-black font-semibold">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)} // close on click
                    className="block rounded-md px-4 py-2 hover:bg-gray-200 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
