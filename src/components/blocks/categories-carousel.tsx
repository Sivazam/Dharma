'use client'

import { useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface Category {
  slug: string
  name: string
  title: string
  description: string
  icon: string
  color: string
  impact: string
}

interface CategoriesCarouselProps {
  categories: Category[]
}

export function CategoriesCarousel({ categories }: CategoriesCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null)
  const [isPaused, setIsPaused] = useState(false)

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start()
    }
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
            onClick={slidePrev}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={slideNext}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Swiper Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false, // We handle this manually
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="categories-swiper !pb-16"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <Card className="group bg-card border-border/30 hover:border-primary/40 transition-all duration-300 rounded-2xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-primary/50 to-primary/60"></div>
                  <CardHeader className="pb-5 flex-shrink-0">
                    <div className="flex items-start gap-3">
                      <div className="text-4xl md:text-5xl flex-shrink-0">
                        {category.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base font-medium text-foreground/60 mt-1">
                          {category.title}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col pt-5">
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-4">
                      {category.impact}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/20">
                      <Button
                        asChild
                        size="lg"
                        className="w-full group relative overflow-hidden bg-amber-800 hover:bg-amber-700 text-white hover:to-amber-700 rounded-full px-6 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-amber-700"
                      >
                        <a href={`#${category.slug}`}>
                          <span className="relative z-10 flex items-center justify-center gap-2 text-base md:text-lg font-semibold tracking-wide">
                            <Heart className="h-5 w-5" />
                            Donate
                          </span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
