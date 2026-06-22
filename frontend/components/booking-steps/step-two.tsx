'use client'

import { useBooking } from '@/lib/booking-context'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: 5000,
    description: 'Essential decoration package',
    features: ['Basic decor setup', 'Standard flowers', 'Basic lighting', 'Installation only'],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 10000,
    description: 'Most popular package',
    features: ['Full decor setup', 'Premium flowers', 'Professional lighting', 'Setup & removal', 'On-site coordination'],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 20000,
    description: 'Luxury experience',
    features: ['Complete decor', 'Premium flowers', 'Advanced lighting', 'Setup, removal & coordination', 'Photography setup', '24/7 support'],
  },
]

export default function BookingStepTwo() {
  const { bookingData, updateBooking, setCurrentStep } = useBooking()

  const handleSelectPackage = (packageId: string, packageName: string, price: number) => {
    updateBooking({ packageName, packagePrice: price })
    setCurrentStep(3)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Choose Your Package</h2>
        <p className="text-muted-foreground">For {bookingData.serviceName}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => handleSelectPackage(pkg.id, pkg.name, pkg.price)}
            className={`text-left rounded-2xl border-2 overflow-hidden transition-all hover:shadow-lg ${
              bookingData.packageName === pkg.name
                ? 'border-primary bg-rose-light/50'
                : 'border-border bg-white hover:border-primary'
            }`}
          >
            {pkg.popular && (
              <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                MOST POPULAR
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

              <div className="mb-6">
                <p className="text-4xl font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {bookingData.packageName === pkg.name && (
                <div className="bg-primary text-primary-foreground py-2 px-4 rounded-lg text-center font-medium text-sm">
                  Selected
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setCurrentStep(1)}
          className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          disabled={!bookingData.packageName}
          onClick={() => setCurrentStep(3)}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-rose-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
