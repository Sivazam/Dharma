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
      <nav data-state={menuState && 'active'}>
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
                'bg-black/30 backdrop-blur-md group-data-[state=active]:block mb-4 md:mb-6 hidden w-full flex-wrap items-center justify-end space-y-3 md:space-y-0 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:bg-transparent lg:p-0 lg:shadow-none rounded-lg md:rounded-none',
                scrolled && '!bg-white/95 !backdrop-blur-md'
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-white/90 hover:text-white transition-colors duration-200 block"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className={scrolled
                    ? 'border-foreground/20 hover:bg-foreground/5 text-foreground transition-all duration-200'
                    : 'border-white/40 hover:bg-white/10 text-white transition-all duration-200 bg-white/10 backdrop-blur-sm'
                  }
                >
                  <Link href="#categories">
                    <span>Explore</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="default"
                  className={scrolled
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200'
                    : 'bg-white hover:bg-white/90 text-black transition-all duration-200'
                  }
                >
                  <Link href="#categories">
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
            <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 md:mb-8">
                  <img
                    src="/pasted_image_1769573139302.png"
                    alt="One Hundi in Every Home"
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                  <span className="text-xs md:text-sm font-medium text-white/95">
                    One Hundi in Every Home
                  </span>
                </div>

                <h1 className="mb-6 md:mb-8 text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-white mb-10 md:mb-12">
                  Dharma as a Daily Habit
                </h1>

                <p className="mb-12 md:mb-16 max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                  Rooted in Sanatana Dharma, make giving a daily sacred practice. Through seven sacred categories of donation, we bring timeless wisdom of our traditions into modern, meaningful action.
                </p>

                <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
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
