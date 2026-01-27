'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

interface SpiritualCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  delay?: number
}

export function SpiritualCard({ title, description, icon, className = '', delay = 0 }: SpiritualCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className={`hover:shadow-lg hover:shadow-saffron/10 transition-all duration-300 border-saffron/20 ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-saffron/10 rounded-full">
              {icon}
            </div>
          </div>
          <CardTitle className="text-xl bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
