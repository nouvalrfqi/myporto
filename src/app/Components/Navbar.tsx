'use client';
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Bio", href: "#bio" },
  { label: "Areas of Interest", href: "#interest" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Competition", href: "#certificates" },
]

export default function OvalNavbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-[20px] bg-white/70 backdrop-blur-lg px-3 py-3 shadow-lg border-2 border-gray-400"
    >
      <ul className="flex items-center lg:gap-10 text-black text-sm font-medium">
        {navItems.slice(0, 2).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative rounded-[12px] px-2 py-2 transition duration-400 hover:bg-gray-300/80 hover:text-black font-bold"
            >
              {item.label}
            </Link>
          </li>
        ))}

        
        {navItems.slice(2).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative rounded-[12px] px-2 py-2 transition duration-400 hover:bg-gray-300/80 hover:text-black font-bold"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
