'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Heart,
  MapPin,
  Calendar,
  Users,
  Globe,
  CreditCard,
} from 'lucide-react'

interface BankDetails {
  accountName: string
  bankName: string
  accountNumber: string
  ifscCode: string
  branch: string
}

interface ImpactHighlights {
  mealsServed?: string
  peopleBenefited?: string
  yearsOfService?: string
  studentsSupported?: string
  cowsProtected?: string
  villagesServed?: string
  eldersSupported?: string
  [key: string]: string | undefined
}

interface Organization {
  id: string
  name: string
  slug: string
  shortDesc: string
  description: string
  history: string | null
  values: string | null
  impactHighlights: string
  donationLink: string | null
  bankDetails: string | null
  website: string | null
  category: {
    name: string
    slug: string
  }
}

interface OrganizationViewProps {
  orgSlug: string | null
  onBack: () => void
}

export function OrganizationView({ orgSlug, onBack }: OrganizationViewProps) {
  const [organization, setOrganization] = useState<Organization | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOrganization() {
      if (!orgSlug) {
        setOrganization(null)
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/organizations/${orgSlug}`)
        const data = await response.json()

        if (data.success) {
          setOrganization(data.data)
        } else {
          setError(data.error || 'Failed to load organization')
        }
      } catch (err) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchOrganization()
  }, [orgSlug])

  if (!orgSlug) {
    return null
  }

  if (loading) {
    return (
      <section className="min-h-screen py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" onClick={onBack} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Organizations
            </Button>
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !organization) {
    return (
      <section className="min-h-screen py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" onClick={onBack} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Organizations
            </Button>
            <Card className="border-red-500/50 bg-red-50/50">
              <CardContent className="pt-6 text-center">
                <p className="text-red-600">{error || 'Organization not found'}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  const bankDetails = organization.bankDetails ? JSON.parse(organization.bankDetails) : null
  const impactHighlights = organization.impactHighlights ? JSON.parse(organization.impactHighlights) : {}

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-background via-saffron/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button variant="ghost" onClick={onBack} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Organizations
            </Button>
          </motion.div>

          {/* Organization Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div className="flex-1">
                <Badge className="bg-green-500 text-white border-none mb-4">
                  <Heart className="mr-1 h-3 w-3" />
                  Verified Organization
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-saffron via-gold to-sandalwood bg-clip-text text-transparent">
                  {organization.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {organization.shortDesc}
                </p>
              </div>
              {organization.website && (
                <Button
                  asChild
                  variant="outline"
                  className="border-saffron/50 text-saffron hover:bg-saffron hover:text-saffron-foreground"
                >
                  <a href={organization.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              )}
            </div>

            <Card className="border-saffron/30 bg-background/80 backdrop-blur">
              <CardContent className="pt-6">
                <Badge variant="outline" className="border-saffron/50 text-saffron mb-4">
                  {organization.category.name}
                </Badge>
                <p className="text-base text-foreground leading-relaxed">
                  {organization.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* History & Values */}
          {(organization.history || organization.values) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              {organization.history && (
                <Card className="border-saffron/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-saffron">
                      <Calendar className="h-5 w-5" />
                      History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {organization.history}
                    </p>
                  </CardContent>
                </Card>
              )}
              {organization.values && (
                <Card className="border-saffron/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gold">
                      <Heart className="h-5 w-5" />
                      Values
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {organization.values}
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}

          {/* Impact Highlights */}
          {Object.keys(impactHighlights).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <Card className="border-saffron/30 bg-gradient-to-br from-saffron/5 to-gold/5">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
                    Impact Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(impactHighlights).map(([key, value], index) => (
                      <div
                        key={key}
                        className="flex items-center gap-3 p-4 bg-background/50 rounded-lg"
                      >
                        <Users className="h-8 w-8 text-saffron" />
                        <div>
                          <p className="text-2xl font-bold text-foreground">{value}</p>
                          <p className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Donation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-saffron/50 shadow-lg shadow-saffron/10">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
                  Make a Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {organization.donationLink ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-saffron/10 rounded-lg">
                      <ExternalLink className="h-6 w-6 text-saffron flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Donate via Official Website
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Click the button below to donate directly through their official website.
                        </p>
                        <Button
                          asChild
                          className="w-full sm:w-auto bg-saffron hover:bg-saffron/90 text-saffron-foreground"
                        >
                          <a
                            href={organization.donationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CreditCard className="mr-2 h-4 w-4" />
                            Donate Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : bankDetails ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gold/10 rounded-lg">
                      <CreditCard className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-4">
                          Bank Account Details
                        </h3>
                        <div className="space-y-3">
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Account Name:</span>
                            <span className="col-span-2 text-sm text-foreground font-semibold">
                              {bankDetails.accountName}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Bank Name:</span>
                            <span className="col-span-2 text-sm text-foreground">
                              {bankDetails.bankName}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Account Number:</span>
                            <span className="col-span-2 text-sm text-foreground font-mono bg-background/50 p-2 rounded">
                              {bankDetails.accountNumber}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-sm font-medium text-muted-foreground">IFSC Code:</span>
                            <span className="col-span-2 text-sm text-foreground font-mono bg-background/50 p-2 rounded">
                              {bankDetails.ifscCode}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Branch:</span>
                            <span className="col-span-2 text-sm text-foreground">
                              {bankDetails.branch}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Transparency Note */}
                <div className="p-4 bg-background/50 rounded-lg border border-saffron/20">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-saffron">Note:</strong> Dharma Hundi does not collect donations directly.
                    All donations are made directly to the respective organization or temple.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
