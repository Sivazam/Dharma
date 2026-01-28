'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Heart, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'Vision', href: '#vision' },
  { name: 'Mission', href: '#mission' },
  { name: 'Categories', href: '#categories' },
  { name: 'Contact', href: '#contact' },
]

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/voice-62ddc.firebasestorage.app/o/dharmaLogo.png?alt=media&token=eca586ba-6b52-4328-8365-5db706212ab0"
        alt="Dharma Hundi Logo"
        className="w-[65px] h-[65px] object-contain"
      />
      <div className="relative">
        <span className={`text-lg md:text-xl font-medium tracking-wide transition-colors duration-500 ${scrolled ? 'text-foreground/80' : 'text-white/90'}`}>
          Dharma Hundi
        </span>
      </div>
    </div>
  )
}

const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full pt-2">
      <nav>
        <div
          className={cn(
            'mx-auto max-w-7xl px-6 md:px-12 transition-all duration-500 rounded-2xl',
            scrolled && 'bg-white/95 backdrop-blur-md shadow-sm my-2'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-8 py-4 md:py-5">
            <div className="flex w-full items-center justify-between gap-12 md:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-3">
                <Logo scrolled={scrolled} />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2 md:hidden"
              >
                <Menu className={`size-5 transition-all duration-300 ${scrolled ? 'text-foreground/70' : 'text-white'} ${menuState ? 'scale-0 opacity-0' : ''}`} />
                <X className={`absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 transition-all duration-300 ${scrolled ? 'text-foreground/70' : 'text-white'} ${menuState ? 'rotate-0 scale-100 opacity-100' : ''}`} />
              </button>

              <div className="hidden md:block">
                <ul className="flex gap-8 text-sm font-normal tracking-wide">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`transition-colors duration-200 relative ${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/90 hover:text-white'}`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={cn(
                'absolute top-full left-0 right-0 mx-auto backdrop-blur-xl max-w-7xl px-6 md:px-12 py-6 md:py-8 lg:relative lg:top-auto lg:left-auto lg:right-auto lg:backdrop-blur-none lg:px-0 lg:py-0 lg:w-fit lg:gap-4 lg:space-y-0 lg:flex lg:flex-row lg:items-center lg:justify-end transition-all duration-300 rounded-b-2xl',
                scrolled
                  ? 'bg-white/98 shadow-lg'
                  : 'bg-white/95 shadow-xl',
                menuState ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none',
                'lg:opacity-100 lg:visible lg:translate-y-0 lg:pointer-events-auto lg:bg-transparent lg:backdrop-blur-none lg:rounded-none lg:shadow-none'
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 block px-3 py-2 rounded-lg"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:w-auto">
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="border-foreground/20 hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-all duration-200"
                >
                  <Link href="#categories" onClick={() => setMenuState(false)}>
                    <span>Explore</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="default"
                  className="bg-amber-800 hover:bg-amber-700 text-white border-2 border-amber-700 hover:border-amber-600 transition-all duration-200"
                >
                  <Link href="#categories" onClick={() => setMenuState(false)}>
                    <span className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Start Donating
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const words = [
    'Daily Habit',
    'Sacred Practice',
    'Way of Life',
    'Spiritual Journey',
    'Timeless Tradition',
    'Living Purpose'
  ]

  useEffect(() => {
    const currentWord = words[wordIndex]
    const typingSpeed = 100
    const deletingSpeed = 50
    const pauseAfterTyping = 2000
    const pauseAfterDeleting = 500

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1))
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), pauseAfterTyping)
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1))
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words])

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative h-screen">
          {/* Video Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onPlay={() => setIsVideoPlaying(true)}
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Fallback to image with animation if video doesn't load */}
            {!isVideoPlaying && (
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hero-zoom-animation"
                style={{
                  backgroundImage: "url('/hero-bg.jpg')"
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75 z-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full h-full flex flex-col items-center justify-center py-8 md:py-12" style={{ paddingTop: 'calc(8rem + 1rem)' }}>
              <div className="max-w-3xl mx-auto grid gap-y-2 md:gap-y-3 grid-cols-1 place-items-center text-center">
                {/* Chip Badge */}
                <div className="inline-flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <img
                      src="/pasted_image_1769573139302.png"
                      alt="One Hundi in Every Home"
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                    <span className="text-xs md:text-sm font-medium text-white/95">
                      One Hundi in Every Home
                    </span>
                  </div>
                </div>

                {/* H1 Title */}
                <div className="text-center">
                  <h1 className="h-[3.5em] md:h-[3em] lg:h-[2.8em] text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white">
                    <span className="block">Dharma as a</span>
                    <span className="relative inline-flex items-center h-[1.2em] md:h-[1.15em] lg:h-[1.1em]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200 font-semibold animate-gradient">
                        {text}
                      </span>
                      <span className="ml-1 w-1 h-12 md:h-16 bg-amber-400 animate-pulse rounded-full"></span>
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <div className="text-center pb-6 md:pb-8">
                  <p className="h-[3.5em] md:h-[3.5em] lg:h-[3em] max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
                    Rooted in Sanatana Dharma, make giving a daily sacred practice. Through seven sacred categories of donation, we bring timeless wisdom of our traditions into modern, meaningful action.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap text-center pt-6 md:pt-8">
                  <Button
                    asChild
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 text-amber-900 hover:from-amber-100 hover:to-amber-50 rounded-full px-10 py-5 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 hover:scale-105 border-2 border-amber-200/50"
                  >
                    <Link href="#categories">
                      <span className="relative z-10 flex items-center gap-2 text-base md:text-lg font-semibold tracking-wide">
                        Begin Your Journey
                        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/15 hover:border-white/80 hover:shadow-white/10 rounded-full px-10 py-5 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    <Link href="#vision">
                      <span className="relative z-10 text-base md:text-lg font-semibold tracking-wide">
                        Learn More
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
