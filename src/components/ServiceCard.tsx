"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Search, Flag } from 'lucide-react'

const icons = {
  PieChart,
  Search,
  Flag
}

interface ServiceCardProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const Icon = icons[icon]

  return (
    <Card className="feature-card">
      <CardContent className="space-y-4 text-center p-6">
        <div className="feature-icon-container">
          <Icon className="feature-icon" />
        </div>
        <h3 className="text-xl font-bold whitespace-normal">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}