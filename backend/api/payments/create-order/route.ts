import { NextRequest, NextResponse } from 'next/server'
import { createPaymentOrder } from '@/lib/payment'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, bookingId, customerEmail, customerName } = body

    // Validate input
    if (!amount || !bookingId || !customerEmail || !customerName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create Razorpay order
    const order = await createPaymentOrder(
      amount,
      bookingId,
      customerEmail,
      customerName
    )

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    })
  } catch (error) {
    console.error('Error creating payment order:', error)
    return NextResponse.json(
      { error: 'Failed to create payment order' },
      { status: 500 }
    )
  }
}
