'use client'

import { useEffect, useState } from 'react'
import { OrganizationCard } from './organization-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { db } from '@/lib/db'

interface Organization {
  id: string
  name: string
  shortDesc: string
  donationLink: string | null
  bankDetails: string | null
  slug: string
}

interface Category {
  id: string
  name: string
  slug: string
  title: string
  description: string
  icon: string
  color: string
  organizations: Organization[]
}

interface CategoryViewProps {
  categorySlug: string | null
  onBack: () => void
  onSelectOrg: (orgSlug: string) => void
}

export function CategoryView({ categorySlug, onBack, onSelectOrg }: CategoryViewProps) {
  const [category, setCategory] = useState<Category | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCategory() {
      if (!categorySlug) {
        setCategory(null)
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/categories/${categorySlug}`)
        const data = await response.json()

        if (data.success) {
          setCategory(data.data)
        } else {
          setError(data.error || 'Failed to load category')
        }
      } catch (err) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchCategory()
  }, [categorySlug])

  if (!categorySlug) {
    return null
  }

  if (loading) {
    return (
      <section className="min-h-screen py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <Button variant="ghost" onClick={onBack} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
            <div className="flex items-center justify-center min-h-[400px]">
              <Loader2 className="h-12 w-12 animate-spin text-saffron" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !category) {
    return (
      <section className="min-h-screen py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <Button variant="ghost" onClick={onBack} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
            <Card className="border-red-500/50 bg-red-50/50">
              <CardContent className="pt-6 text-center">
                <p className="text-red-600">{error || 'Category not found'}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-background via-saffron/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button variant="ghost" onClick={onBack} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
          </motion.div>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${category.color}`}
            >
              <span className="text-4xl">{getCategoryEmoji(category.icon)}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-saffron via-gold to-sandalwood bg-clip-text text-transparent">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card className="border-saffron/30 bg-background/80 backdrop-blur">
              <CardContent className="pt-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Below is a curated list of trusted temples and Dharma-based organizations
                  actively working in the field of <span className="font-semibold text-foreground">{category.name}</span>.
                  <br /><br />
                  You may donate directly through official links or verified bank details.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Organizations Grid */}
          {category.organizations.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {category.organizations.map((org, index) => (
                <motion.div
                  key={org.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <OrganizationCard
                    name={org.name}
                    shortDesc={org.shortDesc}
                    hasWebsite={!!org.donationLink || !!org.website}
                    onClick={() => onSelectOrg(org.slug)}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-saffron/20 bg-background/50">
                <CardContent className="pt-12 pb-12 text-center">
                  <p className="text-lg text-muted-foreground">
                    No organizations listed in this category yet.
                    <br />
                    Check back soon for updates!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

function getCategoryEmoji(icon: string): string {
  const emojiMap: Record<string, string> = {
    UtensilsCrossed: '🥣',
    GraduationCap: '📚',
    Beef: '🐄',
    Shirt: '👗',
    HeartPulse: '🏥',
    Droplets: '💧',
    Home: '🏠',
  }
  return emojiMap[icon] || '🌺'
}
