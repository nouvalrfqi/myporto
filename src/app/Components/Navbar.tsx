'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

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
  const [useHamburger, setUseHamburger] = useState(false)
  const navRef = useRef<HTMLUListElement>(null)
  const navContainerRef = useRef<HTMLElement>(null)

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Auto-detect if desktop nav items wrap to 2 lines → switch to hamburger
  const checkNavOverflow = useCallback(() => {
    if (navRef.current && navContainerRef.current) {
      const ul = navRef.current
      const items = Array.from(ul.children) as HTMLElement[]
      if (items.length === 0) return

      // Check if any item has a different offsetTop (means wrapping happened)
      const firstTop = items[0].offsetTop
      const hasWrapped = items.some(item => item.offsetTop !== firstTop)

      // Also check if the nav overflows its container
      const navWidth = navContainerRef.current.scrollWidth
      const viewportWidth = window.innerWidth

      setUseHamburger(hasWrapped || navWidth > viewportWidth - 40)
    }
  }, [])

  useEffect(() => {
    checkNavOverflow()
    window.addEventListener('resize', checkNavOverflow)
    return () => window.removeEventListener('resize', checkNavOverflow)
  }, [checkNavOverflow])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Sidebar/drawer animation variants
  const drawerVariants = {
    closed: {
      x: '100%',
      transition: { type: 'spring' as const, damping: 30, stiffness: 300 }
    },
    open: {
      x: '0%',
      transition: { type: 'spring' as const, damping: 30, stiffness: 300 }
    }
  }

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  }

  const navItemVariants = {
    closed: { opacity: 0, x: 30 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: 'easeOut' as const }
    })
  }

  return (
    <>
      {/* Desktop Oval Navbar — only if items fit in 1 line */}
      <motion.nav
        ref={navContainerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showNavbar && !useHamburger ? 1 : 0,
          y: showNavbar && !useHamburger ? 0 : -20,
          pointerEvents: showNavbar && !useHamburger ? 'auto' as const : 'none' as const
        }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-[20px] bg-white/70 backdrop-blur-lg px-4 py-3 shadow-lg border-2 border-gray-400"
      >
        <ul ref={navRef} className="flex items-center gap-6 text-black text-sm font-medium whitespace-nowrap">
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

      {/* Top Bar: Initials left + Hamburger right (shown on mobile OR when desktop items don't fit) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showNavbar && (useHamburger || true) ? 1 : 0,
          y: showNavbar ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
        className={`${useHamburger ? 'flex' : 'md:hidden flex'} fixed top-0 left-0 right-0 z-50 items-center justify-between px-5 py-4`}
      >
        {/* Initials */}
        <div className="w-10 h-10 flex items-center justify-center bg-white/80 border border-gray-300 rounded-xl shadow-lg backdrop-blur-md text-sm font-bold text-black tracking-tight">
          NR
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-10 h-10 flex items-center justify-center bg-white/80 border border-gray-300 rounded-xl shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:shadow-xl"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Slide-in Drawer from Right */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-[70] w-[75vw] sm:w-[60vw] md:w-[45vw] bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="text-xl font-bold tracking-tight">
                  Menu
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 px-6 py-8 overflow-y-auto">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      custom={index}
                      variants={navItemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between px-4 py-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gray-50 hover:text-black transition-all duration-200"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Drawer Footer - Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="px-6 py-6 border-t border-gray-100"
              >
                <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest font-medium">Connect</p>
                <div className="flex gap-4 text-gray-500">
                  <a
                    href="https://www.linkedin.com/in/muhammad-nouval-rifqi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/nouvalrfqi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:m.nouvalrfqi@gmail.com"
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <FaEnvelope className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
