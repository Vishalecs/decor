'use client'

import React, { useState } from 'react'
import { useBooking } from '@/lib/booking-context'
import { RazorpayPayment } from '@/components/razorpay-payment'
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'

export default function BookingStepEight({ onSuccess }: { onSuccess?: () => void }) {
  const { bookingData, setCurrentStep } = useBooking()
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [bookingId] = useState(`BK${Math.random().toString(36).substr(2, 9).toUpperCase()}`)

  const totalPrice = bookingData.totalPrice || 0

  const handlePaymentSuccess = (paymentData: any) => {
    setPaymentProcessing(true)
    // Store payment data in booking context or localStorage
    localStorage.setItem(
      'lastPayment',
      JSON.stringify({
        orderId: paymentData.orderId,
        paymentId: paymentData.paymentId,
        bookingId: bookingId,
        timestamp: new Date().toISOString(),
      })
    )
    // Move to confirmation step
    setTimeout(() => {
      if (onSuccess) {
        onSuccess()
      } else {
        setCurrentStep(9)
      }
    }, 1000)
  }

  const handlePaymentError = (error: string) => {
    setPaymentError(error)
    setPaymentProcessing(false)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Complete Your Payment</h2>
        <p className="text-muted-foreground">Secure payment for your event decoration booking</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Booking Summary */}
        <div className="bg-white rounded-2xl p-6 border-2 border-border">
          <h3 className="font-display text-xl font-bold mb-4">Order Summary</h3>
          
          <div className="space-y-4">
            {/* Service Info */}
            <div className="flex justify-between items-start pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="font-medium">{bookingData.serviceName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Package</p>
                <p className="font-medium">{bookingData.packageName}</p>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex justify-between items-start pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-muted-foreground">Event Date</p>
                <p className="font-medium">
                  {new Date(bookingData.selectedDate || '').toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Event Time</p>
                <p className="font-medium">{bookingData.selectedTime}</p>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Package Price</span>
                <span className="font-medium">₹{(bookingData.packagePrice || 0).toLocaleString()}</span>
              </div>
              {(bookingData.addOns || []).length > 0 && (
                <>
                  {(bookingData.addOns || []).map((addon: any) => (
                    <div key={addon.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">+ {addon.name}</span>
                      <span className="font-medium">₹{addon.price.toLocaleString()}</span>
                    </div>
                  ))}
                </>
              )}
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-bold">Total Amount</span>
                <span className="text-2xl font-bold text-primary">₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Payment Information</h4>
              <p className="text-sm text-blue-800">
                This is a secure payment gateway powered by Razorpay. You can pay using credit card, debit card, net banking, or UPI.
              </p>
            </div>
          </div>
        </div>

        {/* Razorpay Payment Component */}
        <div className="bg-white rounded-2xl p-6 border-2 border-border">
          {!paymentProcessing ? (
            <RazorpayPayment
              amount={totalPrice}
              bookingId={bookingId}
              customerName={bookingData.customerName || ''}
              customerEmail={bookingData.customerEmail || ''}
              customerPhone={bookingData.customerPhone || ''}
              serviceName={bookingData.serviceName || ''}
              eventDate={bookingData.selectedDate || ''}
              eventTime={bookingData.selectedTime || ''}
              location={bookingData.address?.street || ''}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
              </div>
              <p className="text-lg font-medium text-foreground">Processing payment...</p>
              <p className="text-sm text-muted-foreground mt-2">Please wait while we verify your payment</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <button
          onClick={() => setCurrentStep(7)}
          disabled={paymentProcessing}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={18} /> Back to Review
        </button>
      </div>
    </div>
  )
}
