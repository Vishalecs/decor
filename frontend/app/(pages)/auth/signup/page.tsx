'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { Mail, Lock, User, Phone, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function SignupPage() {
  const { signup, isLoading } = useAuth()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [validations, setValidations] = useState({
    passwordLength: false,
    passwordMatch: false,
    emailValid: false,
    nameValid: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation
    if (name === 'password') {
      setValidations((prev) => ({
        ...prev,
        passwordLength: value.length >= 8,
        passwordMatch: value === formData.confirmPassword,
      }))
    }
    if (name === 'confirmPassword') {
      setValidations((prev) => ({
        ...prev,
        passwordMatch: value === formData.password,
      }))
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setValidations((prev) => ({
        ...prev,
        emailValid: emailRegex.test(value),
      }))
    }
    if (name === 'fullName') {
      setValidations((prev) => ({
        ...prev,
        nameValid: value.trim().length >= 2,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate all fields
    if (!validations.nameValid || !validations.emailValid || !validations.passwordLength || !validations.passwordMatch) {
      setError('Please fix the validation errors above.')
      return
    }

    try {
      await signup(formData.email, formData.password, formData.fullName, formData.phone)
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-background to-rose-light">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
            <span className="text-white font-display text-2xl font-bold">D</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join DECOR and book your dream event</p>
        </div>

        {/* Signup Form Card */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    validations.nameValid ? 'border-green-500' : 'border-border'
                  } bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                />
                {validations.nameValid && (
                  <CheckCircle2 className="absolute right-3 top-3.5 text-green-500" size={20} />
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    validations.emailValid ? 'border-green-500' : 'border-border'
                  } bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                />
                {validations.emailValid && (
                  <CheckCircle2 className="absolute right-3 top-3.5 text-green-500" size={20} />
                )}
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    validations.passwordLength ? 'border-green-500' : 'border-border'
                  } bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                />
              </div>
              <p className={`text-xs mt-2 ${validations.passwordLength ? 'text-green-600' : 'text-muted-foreground'}`}>
                {validations.passwordLength ? '✓' : '○'} At least 8 characters
              </p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    validations.passwordMatch ? 'border-green-500' : 'border-border'
                  } bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                />
              </div>
              <p className={`text-xs mt-2 ${validations.passwordMatch ? 'text-green-600' : 'text-muted-foreground'}`}>
                {validations.passwordMatch ? '✓' : '○'} Passwords match
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !validations.passwordLength || !validations.passwordMatch || !validations.emailValid || !validations.nameValid}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-primary to-primary text-white font-medium hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-sm text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link 
              href="/auth/login"
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
