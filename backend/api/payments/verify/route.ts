import { NextRequest, NextResponse } from 'next/server'
import { verifyPaymentSignature } from '@/lib/payment'
import { sendBookingConfirmationEmail, sendWhatsAppNotification } from '@/lib/notifications'

interface PaymentVerificationBody {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
  bookingData?: {
    customerName: string
    customerEmail: string
    customerPhone: string
    serviceName: string
    eventDate: string
    eventTime: string
    location: string
    amount: number
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: PaymentVerificationBody = await req.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingData } = body

    // Validate input
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment details' },
        { status: 400 }
      )
    }

    // Verify payment signature
    const isValidSignature = await verifyPaymentSignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    )

    if (!isValidSignature) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      )
    }

    // Send notification emails and SMS
    if (bookingData) {
      try {
        // Send confirmation email
        await sendBookingConfirmationEmail({
          bookingId: razorpay_order_id,
          customerName: bookingData.customerName,
          customerEmail: bookingData.customerEmail,
          customerPhone: bookingData.customerPhone,
          serviceName: bookingData.serviceName,
          eventDate: bookingData.eventDate,
          eventTime: bookingData.eventTime,
          location: bookingData.location,
          amount: bookingData.amount,
          paymentStatus: 'completed',
        })

        // Send WhatsApp notification
        if (bookingData.customerPhone) {
          await sendWhatsAppNotification(
            bookingData.customerPhone,
            razorpay_order_id,
            'confirmed'
          )
        }
      } catch (notificationError) {
        console.error('Error sending notifications:', notificationError)
        // Don't fail the payment verification if notifications fail
      }
    }

    return NextResponse.json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      message: 'Payment verified successfully',
    })
  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}
