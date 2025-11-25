"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Castle, GraduationCap, Compass } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Pikat Kulturore", path: "/pikat-kulturore" },
  { name: "Shkolla Profesionale", path: "/shpe", icon: GraduationCap },
  { name: "Sistemi", path: "/sistemi" },
  { name: "Virtual Tour", path: "/virtual-tour", icon: Compass },
  { name: "Foto", path: "/foto" },
  { name: "Video", path: "/video" },
  { name: "Krijuesi", path: "/krijuesi" },
  { name: "Kontakt", path: "/kontakt" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors">
            <Castle className="h-6 w-6" />
            <span>Elbasan Kultura</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  pathname === item.path ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                    pathname === item.path ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
