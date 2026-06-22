'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { AlertCircle, CheckCircle, Loader } from 'lucide-react'

interface RazorpayPaymentProps {
  amount: number
  bookingId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceName: string
  eventDate: string
  eventTime: string
  location: string
  onPaymentSuccess: (paymentData: any) => void
  onPaymentError: (error: string) => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export function RazorpayPayment({
  amount,
  bookingId,
  customerName,
  customerEmail,
  customerPhone,
  serviceName,
  eventDate,
  eventTime,
  location,
  onPaymentSuccess,
  onPaymentError,
}: RazorpayPaymentProps) {
  const [orderId, setOrderId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle')

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Create payment order
  const createOrder = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          bookingId,
          customerEmail,
          customerName,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create payment order')
      }

      const data = await response.json()
      setOrderId(data.order.id)
      return data.order.id
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create payment order'
      setError(message)
      onPaymentError(message)
      setLoading(false)
    }
  }, [amount, bookingId, customerEmail, customerName, onPaymentError])

  // Handle payment
  const handlePayment = useCallback(async () => {
    if (!window.Razorpay) {
      setError('Razorpay is not loaded')
      return
    }

    try {
      setPaymentStatus('processing')
      const currentOrderId = orderId || (await createOrder())

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        order_id: currentOrderId,
        amount: amount * 100,
        currency: 'INR',
        name: 'DECOR',
        description: `Event Decoration - ${serviceName}`,
        image: '/decor-logo.png',
        customer_notify: 1,
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        notes: {
          bookingId,
          serviceName,
          eventDate,
          eventTime,
          location,
        },
        handler: async (response: any) => {
          try {
            // Verify payment on server
            const verifyResponse = await fetch('/api/payments/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingData: {
                  customerName,
                  customerEmail,
                  customerPhone,
                  serviceName,
                  eventDate,
                  eventTime,
                  location,
                  amount,
                },
              }),
            })

            if (!verifyResponse.ok) {
              throw new Error('Payment verification failed')
            }

            const verifyData = await verifyResponse.json()
            setPaymentStatus('success')
            onPaymentSuccess(verifyData)
          } catch (err) {
            const message = err instanceof Error ? err.message : 'Payment verification failed'
            setPaymentStatus('failed')
            setError(message)
            onPaymentError(message)
          }
        },
        modal: {
          ondismiss: () => {
            setPaymentStatus('failed')
            setError('Payment cancelled')
            onPaymentError('Payment cancelled')
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to process payment'
      setPaymentStatus('failed')
      setError(message)
      onPaymentError(message)
    } finally {
      setLoading(false)
    }
  }, [orderId, createOrder, amount, customerName, customerEmail, customerPhone, serviceName, eventDate, eventTime, location, bookingId, onPaymentSuccess, onPaymentError])

  return (
    <div className="space-y-4">
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-900">Payment Error</p>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
      )}

      {paymentStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-green-900">Payment Successful</p>
            <p className="text-sm text-green-700 mt-1">Your payment has been processed successfully. You will receive a confirmation email shortly.</p>
          </div>
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={loading || paymentStatus === 'success' || paymentStatus === 'processing'}
        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {paymentStatus === 'processing' && <Loader className="w-5 h-5 animate-spin" />}
        {loading ? 'Processing...' : paymentStatus === 'success' ? 'Payment Completed' : `Pay ₹${amount.toLocaleString()}`}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Secure payment powered by Razorpay. Your payment information is encrypted and secure.
      </p>
    </div>
  )
}
