'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Footer } from '@/components/footer'
import { BookingProvider, useBooking } from '@/lib/booking-context'
import BookingStepEight from '@/components/booking-steps/step-eight'
import BookingStepNine from '@/components/booking-steps/step-nine'
import { ShoppingCart, MapPin, Lock } from 'lucide-react'
import { getDecorCategory, getCategoryPackage } from '@/lib/category-packages'

function BookingContent() {
  const { bookingData, updateBooking } = useBooking()
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState('upi')
  const [formData, setFormData] = useState({
    fullName: bookingData.address?.fullName || '',
    email: bookingData.address?.email || '',
    phone: bookingData.address?.phone || '',
    addressLine1: bookingData.address?.street || '',
    addressLine2: '',
    city: bookingData.address?.city || '',
    state: bookingData.address?.state || '',
    pincode: bookingData.address?.pincode || '',
    eventType: '',
    venueName: '',
    eventDate: '',
    eventTime: '',
    guestCount: 0,
    additionalNotes: bookingData.specialRequests || '',
  })
  const searchParams = useSearchParams()

  useEffect(() => {
    const categorySlug = searchParams.get('category')
    const packageSlug = searchParams.get('package')

    if (categorySlug && packageSlug && !bookingData.packageName) {
      const category = getDecorCategory(categorySlug)
      const pkg = getCategoryPackage(categorySlug, packageSlug)

      if (category && pkg) {
        updateBooking({
          serviceName: category.name,
          packageName: pkg.name,
          packagePrice: pkg.price,
        })
      }
    }
  }, [searchParams, bookingData.packageName, updateBooking])

  if (bookingSubmitted) {
    return <BookingStepNine />
  }

  const totalPrice = bookingData.totalPrice || (bookingData.packagePrice || 0) + 598

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.eventDate || !formData.eventTime || !formData.guestCount || formData.guestCount < 1) {
      alert('Please fill in all event details: date, time, and guest count')
      return
    }

    // Update booking context with event details and address
    updateBooking({
      selectedDate: formData.eventDate,
      selectedTime: formData.eventTime,
      guestCount: parseInt(formData.guestCount.toString()),
      address: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        street: formData.addressLine1,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        landmark: formData.addressLine2,
      },
      specialRequests: formData.additionalNotes,
    })

    // For now, just show an alert that booking is submitted
    // In a real app, this would redirect to payment or show confirmation
    alert('Booking details saved! Proceeding to payment...')
    setBookingSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#fffdfd]">
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-2xl">
              {[
                { step: 1, label: 'Cart' },
                { step: 2, label: 'Checkout', active: true },
                { step: 3, label: 'Payment' },
                { step: 4, label: 'Confirmation' },
              ].map((item, idx) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${item.active ? 'bg-[#f7257d] text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {item.step}
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold ${item.active ? 'text-[#f7257d]' : 'text-gray-600'}`}>{item.label}</span>
                  {idx < 3 && <div className={`hidden sm:block h-0.5 w-12 ${item.active ? 'bg-[#f7257d]' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left - Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Selected Package Details */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
                  <h2 className="text-lg font-bold text-[#111827] mb-4 flex items-center gap-2">
                    📦 Your Selected Package
                  </h2>
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-[#596174] mb-1">Service</p>
                        <p className="text-lg font-bold text-[#111827]">{bookingData.serviceName || 'Not Selected'}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#596174] mb-1">Package</p>
                        <p className="text-lg font-bold text-[#f7257d]">{bookingData.packageName || 'Premium'}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div className="bg-pink-50 rounded-lg p-3">
                        <p className="text-xs text-[#596174] mb-1">📅 Event Date</p>
                        <p className="font-bold text-[#111827]">{bookingData.selectedDate ? new Date(bookingData.selectedDate).toLocaleDateString() : 'Select Date'}</p>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-3">
                        <p className="text-xs text-[#596174] mb-1">⏰ Time</p>
                        <p className="font-bold text-[#111827]">{bookingData.selectedTime || 'Select Time'}</p>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-3">
                        <p className="text-xs text-[#596174] mb-1">👥 Guests</p>
                        <p className="font-bold text-[#111827]">{bookingData.guestCount || 0} People</p>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-3">
                        <p className="text-xs text-[#596174] mb-1">📍 Location</p>
                        <p className="font-bold text-[#111827]">{bookingData.address?.city || 'Select City'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100">
                  <h2 className="text-lg font-bold text-[#111827] mb-4 flex items-center gap-2">
                    👤 Customer Information
                  </h2>
                  <p className="text-sm text-[#596174] mb-6">Please enter your details to continue</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Phone Number *</label>
                      <div className="flex gap-2">
                        <select className="w-16 px-2 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d]">
                          <option>+91</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                          className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Address Line 1 *</label>
                      <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleInputChange}
                        placeholder="House no, Building, Street"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Address Line 2 (Optional)</label>
                      <input
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleInputChange}
                        placeholder="Apartment, Suite, Landmark"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">State *</label>
                      <select name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d]">
                        <option value="">Select your state</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>Microsoft.QuickAction.Bluetooth
                        <option value="Ladakh">Ladakh</option>
                        <option value="Puducherry">Puducherry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="Enter pincode"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-white rounded-2xl p-6 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100">
                  <h2 className="text-lg font-bold text-[#111827] mb-4 flex items-center gap-2">
                    🎉 Event Details
                  </h2>
                  <p className="text-sm text-[#596174] mb-6">Tell us about your event</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Event Date *</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Event Time *</label>
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Number of Guests *</label>
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        min="1"
                        max="500"
                        placeholder="Number of guests"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">Event Type *</label>
                      <select name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d]">
                        <option value="">Select event type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Corporate">Corporate</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Venue Name *</label>
                    <input
                      type="text"
                      name="venueName"
                      value={formData.venueName}
                      onChange={handleInputChange}
                      placeholder="Enter venue name"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                    />
                  </div>
                </div>

              {/* Additional Notes */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100">
                <h2 className="text-lg font-bold text-[#111827] mb-4 flex items-center gap-2">
                  📝 Additional Notes (Optional)
                </h2>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share any other requirements, special requests, or details..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Security */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 border border-pink-100 flex items-start gap-3">
                <Lock size={20} className="text-[#f7257d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Secure Payment</p>
                  <p className="text-xs text-[#596174] mt-0.5">Your payment information is 100% secure and encrypted</p>
                </div>
              </div>
            </div>

            {/* Right - Summary & Payment */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100 sticky top-4 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2 flex items-center gap-2">
                    <ShoppingCart size={20} className="text-[#f7257d]" />
                    Order Summary
                  </h3>
                  <p className="text-xs text-[#596174]">
                    {bookingData.addOns?.length ? `${1 + bookingData.addOns.length} items` : '1 item'}
                  </p>
                </div>

                {/* Items */}
                <div className="space-y-3 pb-4 border-b border-pink-100">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center text-xl flex-shrink-0">🎁</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#111827]">{bookingData.packageName || 'Select a Package'}</p>
                      <p className="text-xs text-[#f7257d] font-bold">{bookingData.serviceName || 'Service'}</p>
                    </div>
                    <p className="text-sm font-bold text-[#111827]">₹{(bookingData.packagePrice || 0).toLocaleString()}</p>
                  </div>

                  {bookingData.addOns && bookingData.addOns.length > 0 && (
                    <div className="pt-2 border-t border-pink-100">
                      <p className="text-xs font-bold text-[#111827] mb-2">Add-ons:</p>
                      {bookingData.addOns.map((addon: any) => (
                        <div key={addon.id} className="flex justify-between text-xs text-[#596174] mb-1">
                          <span>+ {addon.name}</span>
                          <span>₹{addon.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between text-[#596174]">
                    <span>Subtotal</span>
                    <span>₹{(bookingData.packagePrice || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#596174]">
                    <span>Tax & Setup</span>
                    <span>₹598</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-[#111827] pt-2.5 border-t border-pink-100">
                    <span>Total Amount</span>
                    <span className="text-[#f7257d]">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-[#596174] text-right">(taxes are included)</p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <p className="text-sm font-bold text-[#111827]">💳 Payment Method</p>
                  <p className="text-xs text-[#596174] mb-3">Choose your preferred payment method</p>
                  
                  <div className="space-y-2">
                    {[
                      { id: 'upi', name: 'UPI / QR Code', icon: '📱' },
                      { id: 'card', name: 'Credit / Debit Card', icon: '💳' },
                      { id: 'bank', name: 'Net Banking', icon: '🏦' },
                      { id: 'wallet', name: 'Digital Wallet', icon: '💰' },
                    ].map(method => (
                      <label key={method.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-[#f7257d] hover:bg-pink-50 transition">
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="w-4 h-4 accent-[#f7257d]"
                        />
                        <span className="text-lg">{method.icon}</span>
                        <span className="text-sm font-semibold text-[#111827]">{method.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pay Button */}
                <button type="submit" className="w-full bg-[#f7257d] hover:bg-[#dd1469] text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  💳 Pay Securely & Place Order
                </button>

                <p className="text-xs text-[#596174] text-center">Your information is 100% secure and encrypted</p>
              </div>
            </div>
          </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function BookingPage() {
  return (
    <BookingProvider>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <BookingContent />
      </Suspense>
    </BookingProvider>
  )
}
