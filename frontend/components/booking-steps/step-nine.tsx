'use client'

import Link from 'next/link'
import { useBooking } from '@/lib/booking-context'
import { CheckCircle, Download, Share2, Home } from 'lucide-react'
import { useState } from 'react'

export default function BookingStepEight() {
  const { bookingData, resetBooking } = useBooking()
  const [bookingId] = useState(`BK${Math.random().toString(36).substr(2, 9).toUpperCase()}`)

  const handleDownloadInvoice = () => {
    // This would generate and download a PDF invoice
    alert(`Invoice BK${bookingId} would be downloaded here`)
  }

  const handleShare = () => {
    const message = `I've booked ${bookingData.serviceName} decoration service for my event! Check out DECOR - We Decor, You Celebrate`
    if (navigator.share) {
      navigator.share({
        title: 'Event Booking Confirmation',
        text: message,
        url: window.location.href,
      })
    } else {
      alert('Share: ' + message)
    }
  }

  const handleNewBooking = () => {
    resetBooking()
    window.location.href = '/services'
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle size={48} className="text-green-600" />
          </div>
        </div>

        <h2 className="text-4xl font-display font-bold mb-3 text-foreground">Booking Confirmed!</h2>
        <p className="text-lg text-muted-foreground mb-4">Your event decoration booking has been successfully confirmed</p>
        <p className="text-2xl font-bold text-primary">Booking ID: {bookingId}</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Confirmation Summary */}
        <div className="bg-white rounded-2xl p-8 border-2 border-green-200">
          <div className="space-y-6">
            {/* Service */}
            <div className="flex justify-between items-start pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="text-xl font-bold">{bookingData.serviceName}</p>
              </div>
              <p className="text-lg font-bold text-primary">{bookingData.packageName}</p>
            </div>

            {/* Event Date & Time */}
            <div className="flex justify-between items-start pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-muted-foreground">Event Date & Time</p>
                <p className="text-lg font-medium">
                  {new Date(bookingData.selectedDate || '').toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                  {' at '}
                  {bookingData.selectedTime}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="pb-4 border-b border-gray-200">
              <p className="text-sm text-muted-foreground mb-2">Delivery Location</p>
              <p className="font-medium">{bookingData.address?.street}</p>
              <p className="text-sm text-muted-foreground">
                {bookingData.address?.city}, {bookingData.address?.state} {bookingData.address?.pincode}
              </p>
            </div>

            {/* Total Amount */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
              <p className="text-3xl font-bold text-primary">₹{(bookingData.totalPrice || 0).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">Advance payment required at checkout</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
          <h3 className="font-bold text-foreground mb-4">What happens next?</h3>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 flex-shrink-0">1</span>
              <span className="text-sm text-foreground">You&apos;ll receive a confirmation email with booking details</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 flex-shrink-0">2</span>
              <span className="text-sm text-foreground">Our team will contact you within 24 hours to finalize details</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 flex-shrink-0">3</span>
              <span className="text-sm text-foreground">Complete payment via Razorpay (multiple options available)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 flex-shrink-0">4</span>
              <span className="text-sm text-foreground">Our team arrives 30 minutes before the event to set up</span>
            </li>
          </ol>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl p-6 border-2 border-border">
          <h3 className="font-bold text-foreground mb-4">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our team is available 24/7 to assist you with any changes or questions
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919876543210"
              className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-rose-dark transition-colors"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 bg-green-500 text-white rounded-lg font-medium text-center hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleDownloadInvoice}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} /> Download Booking Invoice
          </button>

          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            <Share2 size={18} /> Share Booking
          </button>

          <Link
            href="/services"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
            onClick={handleNewBooking}
          >
            <Home size={18} /> Browse More Services
          </Link>
        </div>
      </div>
    </div>
  )
}
