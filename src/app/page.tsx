'use client'

import { HeroSection } from '@/components/blocks/hero-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Heart, ChevronRight, Shield, Users, Target, HeartHandshake } from 'lucide-react'

const categories = [
  {
    slug: 'anna-danam',
    name: 'Anna Danam',
    title: 'Food Donation',
    description: 'Feed the hungry, nourish the soul.',
    icon: '🍛',
    color: 'text-primary/80',
    impact: '10,000+ meals served daily'
  },
  {
    slug: 'vidya-danam',
    name: 'Vidya Danam',
    title: 'Knowledge Donation',
    description: 'Light the lamp of wisdom.',
    icon: '📚',
    color: 'text-primary/80',
    impact: '5,000+ students supported'
  },
  {
    slug: 'go-danam',
    name: 'Go Danam',
    title: 'Cow Donation',
    description: 'Protect our sacred mothers.',
    icon: '🐄',
    color: 'text-primary/80',
    impact: '500+ cows protected'
  },
  {
    slug: 'vastra-danam',
    name: 'Vastra Danam',
    title: 'Clothing Donation',
    description: 'Clothe needy, restore dignity.',
    icon: '👕',
    color: 'text-primary/80',
    impact: '50,000+ garments donated'
  },
  {
    slug: 'arogya-danam',
    name: 'Arogya Danam',
    title: 'Healthcare Donation',
    description: 'Heal the sick, comfort suffering.',
    icon: '⚕️',
    color: 'text-primary/80',
    impact: '20,000+ patients helped'
  },
  {
    slug: 'jala-danam',
    name: 'Jala Danam',
    title: 'Water Donation',
    description: 'Water is life.',
    icon: '💧',
    color: 'text-primary/80',
    impact: '100+ water projects'
  },
  {
    slug: 'ashraya-danam',
    name: 'Ashraya Danam',
    title: 'Shelter Donation',
    description: 'Shelter the homeless, build a home.',
    icon: '🏠',
    color: 'text-primary/80',
    impact: '1,000+ families housed'
  }
]

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <HeroSection />

      {/* Brand Scrolling Section */}
      <section className="py-12 bg-card/20 overflow-hidden">
        <div className="relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="inline-flex">
                {categories.map((category) => (
                  <span
                    key={`${setIndex}-${category.slug}`}
                    className="inline-block mx-6 md:mx-8 px-6 md:px-8 py-2 md:py-3 bg-foreground rounded-full text-base md:text-lg lg:text-xl font-serif font-bold text-background tracking-wide uppercase shadow-md"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Vision Section */}
      <section id="vision" className="py-24 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-8xl opacity-10 animate-float">🌟</div>
        <div className="absolute bottom-20 right-10 text-8xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute top-40 right-20 text-6xl opacity-5 animate-pulse">🙏</div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side - Content */}
              <div className="order-2 lg:order-1 space-y-8 md:space-y-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 mb-8 md:mb-10">
                  <span className="text-2xl md:text-3xl">🌟</span>
                  <span className="text-sm md:text-base font-semibold text-primary tracking-wide uppercase">
                    Our Vision
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight mb-6 md:mb-8">
                  A World Where
                  <br />
                  <span className="text-primary font-medium">Every Home</span> Gives
                </h2>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                    We envision a future where <span className="font-medium text-foreground">every home</span> has a Hundi,
                    and <span className="font-medium text-foreground">every individual</span> experiences the profound joy of giving.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-primary/20 text-sm md:text-base text-foreground/80">
                      <span className="text-lg">🏠</span>
                      <span>Sacred Tradition</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-primary/20 text-sm md:text-base text-foreground/80">
                      <span className="text-lg">💫</span>
                      <span>Daily Practice</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-foreground/60 leading-relaxed">
                    Rooted in ancient Indian tradition of selfless service. We believe that when
                    giving becomes a daily practice, it transforms not just the recipient but the giver as well.
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="order-1 lg:order-2">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1609762499943-4567e7c0a8e5?w=800&q=80"
                    alt="Our Vision"
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section id="mission" className="py-24 md:py-28 bg-gradient-to-b from-primary/10 via-transparent to-primary/5 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/20 mb-8 md:mb-10 shadow-lg">
              <span className="text-2xl md:text-3xl">🎯</span>
              <span className="text-sm md:text-base font-semibold text-primary tracking-wide uppercase">Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight mb-10 md:mb-12">
              Building Bridges of <span className="text-primary font-medium">Compassion</span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
              To connect donors with trusted organizations, ensure complete transparency in every donation, 
              and inspire a global movement of everyday giving through our seven sacred categories.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Connect Card */}
              <Card className="group bg-card border-border/30 hover:border-primary/40 hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full"></div>
                <CardHeader className="pb-6">
                  <div className="relative z-10">
                    <div className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      🤝
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                      Connect
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    Link donors with trusted <span className="font-medium text-foreground">organizations</span> across seven sacred categories.
                  </p>
                </CardContent>
              </Card>

              {/* Transparency Card */}
              <Card className="group bg-card border-border/30 hover:border-primary/40 hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full"></div>
                <CardHeader className="pb-6">
                  <div className="relative z-10">
                    <div className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      🔍
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                      Transparency
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    Ensure <span className="font-medium text-foreground">complete transparency</span> in every donation.
                  </p>
                </CardContent>
              </Card>

              {/* Inspire Card */}
              <Card className="group bg-card border-border/30 hover:border-primary/40 hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full"></div>
                <CardHeader className="pb-6">
                  <div className="relative z-10">
                    <div className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      🌍
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                      Inspire
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    Inspire a <span className="font-medium text-foreground">global movement</span> of everyday giving.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 md:py-28 bg-secondary/10 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16 space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-full border border-secondary/30 shadow-md">
                <span className="text-2xl md:text-3xl">📊</span>
                <span className="text-sm md:text-base font-semibold text-foreground tracking-wide uppercase">Impact at a Glance</span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center space-y-4 group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border-primary/20 group-hover:bg-primary/10 group-hover:shadow-primary/20 transition-all duration-300">
                  <Users className="h-8 w-8 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-medium text-foreground group-hover:text-primary transition-colors">1M+</div>
                <div className="text-base md:text-lg text-foreground/60">Donors Worldwide</div>
              </div>

              <div className="text-center space-y-4 group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border-primary/20 group-hover:bg-primary/10 group-hover:shadow-primary/20 transition-all duration-300">
                  <Target className="h-8 w-8 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-medium text-foreground group-hover:text-primary transition-colors">500+</div>
                <div className="text-base md:text-lg text-foreground/60">Verified NGOs</div>
              </div>

              <div className="text-center space-y-4 group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border-primary/20 group-hover:bg-primary/10 group-hover:shadow-primary/20 transition-all duration-300">
                  <Heart className="h-8 w-8 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-medium text-foreground group-hover:text-primary transition-colors">₹100Cr+</div>
                <div className="text-base md:text-lg text-foreground/60">Total Donations</div>
              </div>

              <div className="text-center space-y-4 group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border-primary/20 group-hover:bg-primary/10 group-hover:shadow-primary/20 transition-all duration-300">
                  <Shield className="h-8 w-8 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-medium text-foreground group-hover:text-primary transition-colors">100K+</div>
                <div className="text-base md:text-lg text-foreground/60">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seven Sacred Categories */}
      <section id="categories" className="py-24 md:py-28 bg-gradient-to-b from-accent/10 via-transparent to-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20 space-y-6">
            <div className="text-6xl md:text-7xl mb-6">🪷</div>
            <h2 className="text-4xl md:text-5xl font-normal text-foreground">
              Seven Sacred Categories
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Each category represents a timeless path of giving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group">
                <Card className="bg-card border-border/30 hover:border-primary/40 transition-all duration-300 rounded-2xl hover:-translate-y-1">
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
      </section>

      {/* Core Message Section */}
      <section id="core-message" className="py-24 md:py-28 bg-gradient-to-b from-muted/20 via-transparent to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16 space-y-6">
              <div className="text-6xl md:text-7xl mb-6">💎</div>
              <h2 className="text-4xl md:text-5xl font-normal text-foreground">
                Core Message
              </h2>
              <div className="w-20 md:w-24 h-0.5 bg-primary/30 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <Card className="group bg-card border-border/30 hover:border-primary/40 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🙏
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                    Sacred Tradition
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    The Hundi is not just a donation box – it's a sacred vessel of collective goodwill,
                    a symbol of our commitment to Dharma. For centuries, temples and homes across India
                    have maintained this tradition of daily giving.
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-card border-border/30 hover:border-primary/40 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🌍
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                    Modern Relevance
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    Today, we bring this timeless tradition to the digital age. Dharma Hundi makes it
                    easy for anyone, anywhere to participate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section id="transparency" className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-6">
              <div className="text-6xl md:text-7xl mb-6">🔍</div>
              <h2 className="text-4xl md:text-5xl font-normal text-foreground">
                Transparency You Can Trust
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                Every rupee matters.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
              <div className="text-center space-y-4 bg-card border-border/30 rounded-2xl p-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">100%</div>
                <h3 className="text-lg md:text-xl font-normal text-foreground mt-3">Direct Allocation</h3>
                <p className="text-sm md:text-base text-foreground/70">
                  Every donation goes directly to your chosen organization.
                </p>
              </div>

              <div className="text-center space-y-4 bg-card border-border/30 rounded-2xl p-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">✓</div>
                <h3 className="text-lg md:text-xl font-normal text-foreground mt-3">Verified Organizations</h3>
                <p className="text-sm md:text-base text-foreground/70">
                  All organizations are thoroughly verified.
                </p>
              </div>

              <div className="text-center space-y-4 bg-card border-border/30 rounded-2xl p-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">📊</div>
                <h3 className="text-lg md:text-xl font-normal text-foreground mt-3">Impact Reports</h3>
                <p className="text-sm md:text-base text-foreground/70">
                  Track your donations with real-time reports.
                </p>
              </div>
            </div>

            <div className="bg-card border-border/30 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="text-5xl md:text-6xl">🛡️</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-normal text-foreground mb-3">
                    Zero Tolerance for Fraud
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    We maintain a zero-tolerance policy for any form of fraud.
                  Your trust is sacred to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-28 bg-gradient-to-b from-secondary/20 via-transparent to-background relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="text-6xl md:text-7xl mb-6">🙏</div>
            <h2 className="text-4xl md:text-5xl font-normal text-foreground leading-tight mb-8">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-10">
              Join thousands of donors who are already making a positive impact.
              Your contribution creates ripples of positive change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => scrollToSection('categories')}
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full px-10 py-5 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 hover:from-primary/95"
              >
                <span className="relative z-10 flex items-center gap-2 text-base md:text-lg font-semibold tracking-wide">
                  <Heart className="h-5 w-5" />
                  Start Donating
                </span>
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg rounded-full px-10 py-5 transition-all duration-300"
              >
                <span className="text-base md:text-lg font-semibold tracking-wide">Partner With Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
              <CardContent className="px-6 md:px-8 pb-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base font-normal text-foreground">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="border-border/30 bg-background focus:border-primary/50 h-12 text-base"
                        suppressHydrationWarning
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base font-normal text-foreground">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="border-border/30 bg-background focus:border-primary/50 h-12 text-base"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-base font-normal text-foreground">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?" 
                        className="border-border/30 bg-background focus:border-primary/50 h-12 text-base"
                        suppressHydrationWarning
                      />
                    </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base font-normal text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more..."
                        rows={6}
                        className="border-border/30 bg-background focus:border-primary/50 resize-none text-base"
                        suppressHydrationWarning
                      />
                    </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 transition-all duration-200"
                    suppressHydrationWarning
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
