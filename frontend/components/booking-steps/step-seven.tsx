'use client'

import { useBooking } from '@/lib/booking-context'
import { ArrowRight, ArrowLeft, MapPin, Phone, Mail, Calendar, Clock, Users } from 'lucide-react'

export default function BookingStepSeven() {
  const { bookingData, updateBooking, setCurrentStep } = useBooking()

  // Calculate total price
  const packagePrice = bookingData.packagePrice || 0
  const addOnsPrice = (bookingData.addOns || []).reduce((sum, addon) => sum + addon.price, 0)
  const totalPrice = packagePrice + addOnsPrice


  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Review Your Booking</h2>
        <p className="text-muted-foreground">Please verify all details before confirming</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Service Summary */}
        <div className="bg-white rounded-2xl p-6 border-2 border-border">
          <h3 className="font-display text-xl font-bold mb-4">Service Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="font-medium">{bookingData.serviceName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Package:</span>
              <span className="font-medium">{bookingData.packageName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Package Price:</span>
              <span className="font-medium">₹{(bookingData.packagePrice || 0).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-white rounded-2xl p-6 border-2 border-border space-y-4">
          <h3 className="font-display text-xl font-bold">Event Details</h3>

          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">
                {new Date(bookingData.selectedDate || '').toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={20} className="text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium">{bookingData.selectedTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users size={20} className="text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Expected Guests</p>
              <p className="font-medium">{bookingData.guestCount} people</p>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-2xl p-6 border-2 border-border">
          <h3 className="font-display text-xl font-bold mb-4">Delivery Address</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <MapPin size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{bookingData.address?.fullName}</p>
                <p className="text-sm text-muted-foreground">{bookingData.address?.street}</p>
                {bookingData.address?.landmark && (
                  <p className="text-sm text-muted-foreground">Landmark: {bookingData.address.landmark}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  {bookingData.address?.city}, {bookingData.address?.state} {bookingData.address?.pincode}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{bookingData.address?.phone}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{bookingData.address?.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Requests */}
        {bookingData.specialRequests && (
          <div className="bg-white rounded-2xl p-6 border-2 border-border">
            <h3 className="font-display text-xl font-bold mb-3">Special Requests</h3>
            <p className="text-muted-foreground">{bookingData.specialRequests}</p>
          </div>
        )}

        {/* Price Summary */}
        <div className="bg-rose-light/50 rounded-2xl p-6 border-2 border-primary">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Package:</span>
              <span>₹{(bookingData.packagePrice || 0).toLocaleString()}</span>
            </div>

            {(bookingData.addOns || []).length > 0 && (
              <>
                {(bookingData.addOns || []).map((addon: { id: string; name: string; price: number }) => (
                  <div key={addon.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{addon.name}:</span>
                    <span>₹{addon.price.toLocaleString()}</span>
                  </div>
                ))}
              </>
            )}

            <div className="border-t border-primary pt-3">
              <div className="flex justify-between">
                <span className="font-bold">Total Price:</span>
                <span className="text-2xl font-bold text-primary">₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setCurrentStep(6)}
          className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          onClick={() => setCurrentStep(8)}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-rose-dark transition-colors"
        >
          Continue to Payment <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
