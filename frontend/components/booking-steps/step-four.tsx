'use client'

import { useBooking } from '@/lib/booking-context'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'

const timeSlots = [
  { time: '08:00 AM', available: true, label: 'Early Morning' },
  { time: '09:00 AM', available: true, label: 'Morning' },
  { time: '10:00 AM', available: true, label: 'Morning' },
  { time: '11:00 AM', available: true, label: 'Late Morning' },
  { time: '12:00 PM', available: false, label: 'Noon (Limited)' },
  { time: '01:00 PM', available: true, label: 'Afternoon' },
  { time: '02:00 PM', available: true, label: 'Afternoon' },
  { time: '03:00 PM', available: true, label: 'Afternoon' },
  { time: '04:00 PM', available: true, label: 'Late Afternoon' },
  { time: '05:00 PM', available: true, label: 'Evening' },
  { time: '06:00 PM', available: true, label: 'Evening' },
  { time: '07:00 PM', available: true, label: 'Late Evening' },
]

export default function BookingStepFour() {
  const { bookingData, updateBooking, setCurrentStep } = useBooking()

  const handleSelectTime = (time: string) => {
    updateBooking({ selectedTime: time })
  }

  const handleContinue = () => {
    if (bookingData.selectedTime) {
      setCurrentStep(5)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Select Event Time</h2>
        <p className="text-muted-foreground">On {bookingData.selectedDate}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {timeSlots.map((slot) => (
          <button
            key={slot.time}
            onClick={() => slot.available && handleSelectTime(slot.time)}
            disabled={!slot.available}
            className={`p-4 rounded-lg border-2 transition-all ${
              bookingData.selectedTime === slot.time
                ? 'border-primary bg-rose-light text-primary'
                : slot.available
                ? 'border-border bg-white hover:border-primary'
                : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock size={16} />
              <span className="font-bold">{slot.time}</span>
            </div>
            <p className="text-xs text-muted-foreground">{slot.label}</p>
          </button>
        ))}
      </div>

      {bookingData.selectedTime && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            You've selected {bookingData.selectedTime} on {new Date(bookingData.selectedDate || '').toLocaleDateString()}
          </p>
        </div>
      )}

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setCurrentStep(3)}
          className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          disabled={!bookingData.selectedTime}
          onClick={handleContinue}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-rose-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
