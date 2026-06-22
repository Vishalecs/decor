'use client'

import { useBooking } from '@/lib/booking-context'
import { ArrowRight, ArrowLeft, Upload, X } from 'lucide-react'
import { useState } from 'react'

export default function BookingStepSix() {
  const { bookingData, updateBooking, setCurrentStep } = useBooking()
  const [images, setImages] = useState<File[]>(bookingData.referenceImages || [])
  const [previews, setPreviews] = useState<string[]>([])
  const [specialRequests, setSpecialRequests] = useState(bookingData.specialRequests || '')

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => file.type.startsWith('image/'))

    if (validFiles.length > 0) {
      const newImages = [...images, ...validFiles]
      if (newImages.length <= 5) {
        setImages(newImages)

        // Create previews
        validFiles.forEach((file) => {
          const reader = new FileReader()
          reader.onload = (event) => {
            setPreviews((prev) => [...prev, event.target?.result as string])
          }
          reader.readAsDataURL(file)
        })
      } else {
        alert('Maximum 5 images allowed')
      }
    }
  }

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleContinue = () => {
    updateBooking({
      referenceImages: images,
      specialRequests,
    })
    setCurrentStep(7)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Reference Images & Notes</h2>
        <p className="text-muted-foreground">Share inspiration photos and special requirements</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-4">Reference Images (Optional, Max 5)</label>

          <div className="border-2 border-dashed border-secondary rounded-2xl p-8 text-center hover:border-primary transition-colors">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              disabled={images.length >= 5}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <Upload size={32} className="mx-auto text-secondary mb-3" />
              <p className="font-medium text-foreground mb-1">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
              <p className="text-xs text-muted-foreground mt-2">
                {images.length}/5 images uploaded
              </p>
            </label>
          </div>

          {/* Image Preview Grid */}
          {previews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {previews.map((preview, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden">
                  <img
                    src={preview}
                    alt={`Preview ${idx + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Special Requests or Notes</label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Tell us about any special themes, color preferences, additional requirements, or anything else we should know..."
            className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={6}
          />
          <p className="text-xs text-muted-foreground mt-2">{specialRequests.length}/500 characters</p>
        </div>

        {/* Guest Count */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Expected Guest Count</label>
          <input
            type="number"
            min="1"
            max="5000"
            value={bookingData.guestCount || 100}
            onChange={(e) => updateBooking({ guestCount: parseInt(e.target.value) })}
            className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setCurrentStep(5)}
          className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          onClick={handleContinue}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-rose-dark transition-colors"
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
