import nodemailer from 'nodemailer'
import twilio from 'twilio'

// Email transporter
const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Twilio SMS client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export interface BookingNotificationData {
  bookingId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceName: string
  eventDate: string
  eventTime: string
  location: string
  amount: number
  paymentStatus: 'pending' | 'completed' | 'failed'
}

// Send booking confirmation email
export async function sendBookingConfirmationEmail(data: BookingNotificationData) {
  try {
    const htmlContent = `
      <h2>Booking Confirmation</h2>
      <p>Dear ${data.customerName},</p>
      <p>Thank you for booking with DECOR! Your event decoration booking has been confirmed.</p>
      
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Booking ID:</strong> ${data.bookingId}</li>
        <li><strong>Service:</strong> ${data.serviceName}</li>
        <li><strong>Event Date:</strong> ${data.eventDate}</li>
        <li><strong>Event Time:</strong> ${data.eventTime}</li>
        <li><strong>Location:</strong> ${data.location}</li>
        <li><strong>Amount:</strong> ₹${data.amount.toLocaleString()}</li>
        <li><strong>Payment Status:</strong> ${data.paymentStatus === 'completed' ? 'Paid' : 'Pending'}</li>
      </ul>
      
      <p>Our team will contact you shortly to confirm the final details.</p>
      <p>If you have any questions, feel free to contact us at support@decor.com or call +91-XXXXXXXXXX</p>
      
      <p>Best regards,<br/>DECOR Team</p>
    `

    await emailTransporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@decor.com',
      to: data.customerEmail,
      subject: `Booking Confirmation - ${data.bookingId}`,
      html: htmlContent,
    })

    console.log(`Booking confirmation email sent to ${data.customerEmail}`)
  } catch (error) {
    console.error('Error sending booking confirmation email:', error)
    throw error
  }
}

// Send booking payment reminder SMS
export async function sendPaymentReminderSMS(
  phoneNumber: string,
  bookingId: string,
  amount: number
) {
  try {
    await twilioClient.messages.create({
      body: `DECOR: Payment pending for booking ${bookingId}. Amount due: ₹${amount}. Please complete payment to confirm your event decoration. Reply STOP to opt out.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    })

    console.log(`Payment reminder SMS sent to ${phoneNumber}`)
  } catch (error) {
    console.error('Error sending payment reminder SMS:', error)
    throw error
  }
}

// Send WhatsApp notification
export async function sendWhatsAppNotification(
  phoneNumber: string,
  bookingId: string,
  status: string
) {
  try {
    const messages = {
      confirmed: `Hi! Your DECOR booking ${bookingId} is confirmed. Our team will contact you soon to finalize details. Thank you for choosing DECOR!`,
      completed: `Your event decoration by DECOR is complete! We hope you loved it. Please share your feedback and photos with us!`,
      cancelled: `Your DECOR booking ${bookingId} has been cancelled. If you have questions, contact us at support@decor.com`,
    }

    await twilioClient.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:${phoneNumber}`,
      body: messages[status as keyof typeof messages] || `Booking ${bookingId} status: ${status}`,
    })

    console.log(`WhatsApp notification sent to ${phoneNumber}`)
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error)
    throw error
  }
}

// Send invoice email
export async function sendInvoiceEmail(
  customerEmail: string,
  customerName: string,
  bookingId: string,
  invoiceUrl: string
) {
  try {
    const htmlContent = `
      <h2>Invoice for Your Event Decoration</h2>
      <p>Dear ${customerName},</p>
      <p>Please find your invoice attached for booking ID: <strong>${bookingId}</strong></p>
      
      <p>
        <a href="${invoiceUrl}" style="background-color: #c1216e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Download Invoice
        </a>
      </p>
      
      <p>Thank you for your business!</p>
      <p>Best regards,<br/>DECOR Team</p>
    `

    await emailTransporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@decor.com',
      to: customerEmail,
      subject: `Invoice - ${bookingId}`,
      html: htmlContent,
    })

    console.log(`Invoice email sent to ${customerEmail}`)
  } catch (error) {
    console.error('Error sending invoice email:', error)
    throw error
  }
}
