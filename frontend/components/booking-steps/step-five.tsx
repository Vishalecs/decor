'use client'

import { useBooking } from '@/lib/booking-context'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function BookingStepFive() {
  const { bookingData, updateBooking, setCurrentStep } = useBooking()
  const [formData, setFormData] = useState({
    fullName: bookingData.address?.fullName || '',
    phone: bookingData.address?.phone || '',
    email: bookingData.address?.email || '',
    street: bookingData.address?.street || '',
    city: bookingData.address?.city || 'Indore',
    state: bookingData.address?.state || 'Madhya Pradesh',
    pincode: bookingData.address?.pincode || '',
    landmark: bookingData.address?.landmark || '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.phone.match(/^[6-9]\d{9}$/)) newErrors.phone = 'Valid phone number is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required'
    if (!formData.street.trim()) newErrors.street = 'Street address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.pincode.match(/^[0-9]{6}$/)) newErrors.pincode = 'Valid 6-digit pincode is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleContinue = () => {
    if (validateForm()) {
      updateBooking({ address: formData })
      setCurrentStep(6)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Delivery Address</h2>
        <p className="text-muted-foreground">Where should we set up the decoration?</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.fullName ? 'border-red-500' : 'border-border'
              }`}
              placeholder="Your name"
            />
            {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.phone ? 'border-red-500' : 'border-border'
              }`}
              placeholder="10-digit number"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email ? 'border-red-500' : 'border-border'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Street Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">Street Address *</label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleChange('street', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.street ? 'border-red-500' : 'border-border'
              }`}
              placeholder="Building, street, area"
            />
            {errors.street && <p className="text-red-600 text-sm mt-1">{errors.street}</p>}
          </div>

          {/* Landmark */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">Landmark (Optional)</label>
            <input
              type="text"
              value={formData.landmark}
              onChange={(e) => handleChange('landmark', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nearby landmark"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">City *</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.city ? 'border-red-500' : 'border-border'
              }`}
              placeholder="City name"
            />
            {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">State *</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.state ? 'border-red-500' : 'border-border'
              }`}
              placeholder="State"
            />
            {errors.state && <p className="text-red-600 text-sm mt-1">{errors.state}</p>}
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Pincode *</label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) => handleChange('pincode', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.pincode ? 'border-red-500' : 'border-border'
              }`}
              placeholder="6-digit pincode"
              maxLength={6}
            />
            {errors.pincode && <p className="text-red-600 text-sm mt-1">{errors.pincode}</p>}
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setCurrentStep(4)}
          className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          onClick={handleContinue}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-rose-dark transition-colors"
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
