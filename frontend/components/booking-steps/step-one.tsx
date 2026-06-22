'use client'

import Link from 'next/link'
import { services } from '@/lib/services'
import { useBooking } from '@/lib/booking-context'
import { Check, ArrowRight } from 'lucide-react'

export default function BookingStepOne() {
  const { bookingData, updateBooking, setCurrentStep } = useBooking()

  const handleSelectService = (serviceId: number, serviceName: string) => {
    updateBooking({ serviceId, serviceName })
    setCurrentStep(2)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Choose Your Service</h2>
        <p className="text-muted-foreground">Select the decoration service for your celebration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleSelectService(service.id, service.name)}
            className={`text-left p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
              bookingData.serviceId === service.id
                ? 'border-primary bg-rose-light/50'
                : 'border-border bg-white hover:border-primary'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-display font-bold mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
              {bookingData.serviceId === service.id && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-white" />
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-xl font-bold text-primary">₹{service.price.toLocaleString()}</p>
              </div>
              <div className="ml-auto">
                <span className="text-xs text-muted-foreground">
                  {service.reviews} reviews • {service.rating} rating
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-end pt-8">
        <button
          disabled={!bookingData.serviceId}
          onClick={() => setCurrentStep(2)}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-rose-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
