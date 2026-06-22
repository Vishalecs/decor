'use client'

import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Package {
  id: string
  name: string
  description: string
  price: number
  duration: string
  features: string[]
  popular?: boolean
}

interface PackageComparisonProps {
  packages: Package[]
}

export function PackageComparison({ packages }: PackageComparisonProps) {
  const allFeatures = Array.from(
    new Set(packages.flatMap((pkg) => pkg.features))
  )

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full">
        <thead>
          <tr className="bg-gold-light border-b border-border">
            <th className="px-6 py-4 text-left font-display font-bold text-foreground">Features</th>
            {packages.map((pkg) => (
              <th key={pkg.id} className="px-6 py-4 text-center">
                <div className={`${pkg.popular ? 'bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block' : ''}`}>
                  <div className="font-display font-bold text-lg">{pkg.name}</div>
                  <div className="text-sm opacity-80">{pkg.description}</div>
                  <div className="font-display text-2xl font-bold mt-2">₹{pkg.price.toLocaleString()}</div>
                  <div className="text-xs opacity-75 mt-1">{pkg.duration}</div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature, index) => (
            <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-rose-light/30'}>
              <td className="px-6 py-4 font-medium text-foreground border-r border-border">{feature}</td>
              {packages.map((pkg) => (
                <td key={pkg.id} className="px-6 py-4 text-center border-r border-border last:border-r-0">
                  {pkg.features.includes(feature) ? (
                    <Check size={20} className="text-green-600 mx-auto" />
                  ) : (
                    <X size={20} className="text-gray-400 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-border">
            <td className="px-6 py-4"></td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="px-6 py-4 text-center">
                <Button
                  className={`w-full ${pkg.popular ? 'bg-primary hover:bg-rose-dark' : 'bg-secondary hover:text-secondary-foreground'}`}
                >
                  Book {pkg.name}
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
