'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  title: string
  slug: string
  description: string
  icon: React.ReactNode
  color: string
  onClick: () => void
  delay?: number
}

export function CategoryCard({ title, slug, description, icon, color, onClick, delay = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="group cursor-pointer h-full overflow-hidden border-saffron/20 hover:shadow-2xl hover:shadow-saffron/20 transition-all duration-500">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div
              className={`p-4 rounded-2xl ${color} bg-gradient-to-br group-hover:scale-110 transition-transform duration-500`}
            >
              {icon}
            </div>
            <Badge
              variant="outline"
              className="border-saffron/50 text-saffron text-xs font-medium"
            >
              View Details
            </Badge>
          </div>
          <div>
            <CardTitle className="text-2xl mb-2 bg-gradient-to-r from-saffron via-gold to-sandalwood bg-clip-text text-transparent">
              {title}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Button
            onClick={onClick}
            variant="ghost"
            className="w-full group-hover:bg-saffron group-hover:text-saffron-foreground transition-all duration-300"
          >
            Explore Organizations
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
