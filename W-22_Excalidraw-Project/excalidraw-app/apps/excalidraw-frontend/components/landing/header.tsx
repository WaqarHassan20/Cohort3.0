"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm dark:bg-background/90" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            Excalidraw
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary/80 transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary/80 transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* <Button variant="outline" size="sm">
            Log in
          </Button> */}
          <Button size="sm">
            Try for free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="#features"
              className="py-2 text-sm font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works"
              className="py-2 text-sm font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials"
              className="py-2 text-sm font-medium"

              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#pricing"
              className="py-2 text-sm font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#faq"
              className="py-2 text-sm font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="outline" size="sm">
                Log in
              </Button>
              <Button size="sm">
                Try for free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}