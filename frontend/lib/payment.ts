import Razorpay from 'razorpay'

// Initialize Razorpay only if keys are available
const razorpay = process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
  ? new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })
  : null

export interface PaymentOrder {
  id: string
  entity: string
  amount: number
  amount_paid: number
  amount_due: number
  currency: string
  receipt: string
  offer_id: string | null
  status: string
  attempts: number
  notes: Record<string, any>
  created_at: number
}

export interface PaymentVerification {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

// Create payment order
export async function createPaymentOrder(
  amount: number,
  bookingId: string,
  customerEmail: string,
  customerName: string
): Promise<PaymentOrder> {
  try {
    if (!razorpay) {
      throw new Error('Razorpay is not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.')
    }
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: bookingId,
      notes: {
        bookingId,
        customerEmail,
        customerName,
      },
    })
    return order as PaymentOrder
  } catch (error) {
    console.error('Error creating payment order:', error)
    throw error
  }
}

// Verify payment signature
export async function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string
): Promise<boolean> {
  try {
    const crypto = require('crypto')
    const body = orderId + '|' + paymentId
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex')

    return expectedSignature === signature
  } catch (error) {
    console.error('Error verifying payment signature:', error)
    return false
  }
}

// Fetch payment details
export async function getPaymentDetails(paymentId: string) {
  try {
    if (!razorpay) {
      throw new Error('Razorpay is not configured.')
    }
    const payment = await razorpay.payments.fetch(paymentId)
    return payment
  } catch (error) {
    console.error('Error fetching payment details:', error)
    throw error
  }
}

// Refund payment
export async function refundPayment(paymentId: string, amount?: number) {
  try {
    if (!razorpay) {
      throw new Error('Razorpay is not configured.')
    }
    const refund = await razorpay.payments.refund(paymentId, {
      amount: amount ? amount * 100 : undefined,
    })
    return refund
  } catch (error) {
    console.error('Error refunding payment:', error)
    throw error
  }
}
