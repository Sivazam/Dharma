'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Heart, Landmark } from 'lucide-react'

interface OrganizationCardProps {
  name: string
  shortDesc: string
  hasWebsite: boolean
  onClick: () => void
}

export function OrganizationCard({ name, shortDesc, hasWebsite, onClick }: OrganizationCardProps) {
  return (
    <Card className="group hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 border-saffron/20">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 bg-saffron/10 rounded-full">
            <Landmark className="h-5 w-5 text-saffron" />
          </div>
          <Badge
            variant="outline"
            className="border-green-500/50 text-green-600 text-xs"
          >
            Verified
          </Badge>
        </div>
        <div className="pt-4">
          <CardTitle className="text-xl mb-2 group-hover:text-saffron transition-colors">
            {name}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {shortDesc}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Button
            onClick={onClick}
            className="flex-1 bg-saffron hover:bg-saffron/90 text-saffron-foreground"
          >
            View Details
          </Button>
          {hasWebsite && (
            <Button
              variant="outline"
              className="border-saffron/50 text-saffron hover:bg-saffron/10"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
