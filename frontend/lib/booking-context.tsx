'use client'

import React, { createContext, useContext, useState } from 'react'

export interface BookingAddress {
  fullName: string
  phone: string
  email: string
  street: string
  city: string
  state: string
  pincode: string
  landmark?: string
}

export interface BookingData {
  serviceId: number
  serviceName: string
  packageName: string
  packagePrice: number
  selectedDate: string
  selectedTime: string
  guestCount: number
  address: BookingAddress
  referenceImages: File[]
  specialRequests: string
  addOns: Array<{ id: string; name: string; price: number }>
  totalPrice: number
}

interface BookingContextType {
  bookingData: Partial<BookingData>
  updateBooking: (data: Partial<BookingData>) => void
  resetBooking: () => void
  currentStep: number
  setCurrentStep: (step: number) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({})
  const [currentStep, setCurrentStep] = useState(1)

  const updateBooking = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({
      ...prev,
      ...data,
    }))
  }

  const resetBooking = () => {
    setBookingData({})
    setCurrentStep(1)
  }

  return (
    <BookingContext.Provider value={{ bookingData, updateBooking, resetBooking, currentStep, setCurrentStep }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
