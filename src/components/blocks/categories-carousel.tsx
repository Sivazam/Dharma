'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Category {
  slug: string
  name: string
  title: string
  description: string
  icon: string
  impact: string
}

interface CategoriesCarouselProps {
  categories: Category[]
}

export function CategoriesCarousel({ categories }: CategoriesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsToShow = typeof window !== 'undefined' ? (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 1

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - cardsToShow : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= categories.length - cardsToShow ? 0 : prev + 1))
  }

  return (
    <section id="categories" className="py-24 md:py-28 bg-gradient-to-b from-amber-50 via-background to-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16 space-y-6">
          <div className="text-6xl md:text-7xl mb-6">🪷</div>
          <h2 className="text-4xl md:text-5xl font-normal text-foreground">
            Seven Sacred Categories
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Each category represents a timeless path of giving.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <Card className="group bg-card border-border/30 hover:border-primary/40 transition-all duration-300 rounded-2xl hover:-translate-y-1 h-full">
                  <div className="h-2 bg-gradient-to-r from-primary/50 to-primary/60"></div>
                  <CardHeader className="pb-5">
                    <div className="flex items-start gap-3">
                      <div className="text-4xl md:text-5xl">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base font-medium text-foreground/60 mt-1">
                          {category.title}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5 pt-5">
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/20">
                      <div className="flex items-center gap-2 text-sm md:text-base text-primary/80 font-medium">
                        <span className="text-lg md:text-xl">✨</span>
                        <span>{category.impact}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground/30 group-hover:text-primary/80 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(Math.min(index, categories.length - cardsToShow))}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-primary/30'
              }`}
              aria-label={`Go to category ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
