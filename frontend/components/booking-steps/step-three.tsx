'use client'

import { useState } from 'react'
import { useBooking } from '@/lib/booking-context'
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

export default function BookingStepThree() {
  const { bookingData, updateBooking, setCurrentStep } = useBooking()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const days = []
  const firstDay = getFirstDayOfMonth(currentMonth)
  const daysInMonth = getDaysInMonth(currentMonth)

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today
  }

  const handleSelectDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    updateBooking({ selectedDate: dateStr })
  }

  const handleContinue = () => {
    if (bookingData.selectedDate) {
      setCurrentStep(4)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Select Event Date</h2>
        <p className="text-muted-foreground">Choose when you want the decoration</p>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* Month/Year Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <h3 className="text-xl font-bold">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>

          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm font-bold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, idx) => {
            const available = date && isDateAvailable(date)
            const isSelected = date && bookingData.selectedDate === date.toISOString().split('T')[0]

            return (
              <button
                key={idx}
                onClick={() => date && available && handleSelectDate(date)}
                disabled={!available}
                className={`p-2 text-sm font-medium rounded-lg transition-colors ${
                  date
                    ? isSelected
                      ? 'bg-primary text-primary-foreground'
                      : available
                      ? 'bg-muted hover:bg-secondary hover:text-secondary-foreground'
                      : 'text-muted-foreground cursor-not-allowed opacity-50'
                    : ''
                }`}
              >
                {date?.getDate()}
              </button>
            )
          })}
        </div>

        {/* Selected Date Display */}
        {bookingData.selectedDate && (
          <div className="mt-6 p-4 bg-rose-light/50 rounded-lg border border-primary">
            <p className="text-sm text-muted-foreground">Selected date:</p>
            <p className="text-lg font-bold text-primary">
              {new Date(bookingData.selectedDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setCurrentStep(2)}
          className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          disabled={!bookingData.selectedDate}
          onClick={handleContinue}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-rose-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
