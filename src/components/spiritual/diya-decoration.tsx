'use client'

import { Flame } from 'lucide-react'

interface DiyaDecorationProps {
  className?: string
}

export function DiyaDecoration({ className = '' }: DiyaDecorationProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-radial from-saffron/20 via-transparent to-transparent blur-xl" />
      <Flame className="relative text-saffron diya-glow" />
    </div>
  )
}
