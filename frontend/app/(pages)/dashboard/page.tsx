'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Footer } from '@/components/footer'
import { Calendar, MapPin, Users, DollarSign, ArrowRight, Loader2, LogOut, Mail, Phone, Settings } from 'lucide-react'

interface Booking {
  id: string
  service: string
  date: string
  time: string
  location: string
  guestCount: number
  totalPrice: number
  status: 'completed' | 'upcoming' | 'cancelled'
  createdAt: string
}

export default function DashboardPage() {
  const { user, isLoading: authLoading, logout, isAuthenticated } = useAuth()
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [authLoading, isAuthenticated, router])

  useEffect(() => {
    // Load mock bookings data
    if (isAuthenticated && user) {
      setBookings([
        {
          id: 'BOOK001',
          service: 'Wedding Decoration',
          date: '2025-08-15',
          time: '6:00 PM',
          location: 'The Grand Ballroom, New Delhi',
          guestCount: 250,
          totalPrice: 125000,
          status: 'upcoming',
          createdAt: '2024-06-01',
        },
        {
          id: 'BOOK002',
          service: 'Birthday Party Decoration',
          date: '2025-07-20',
          time: '2:00 PM',
          location: 'Taj City Hotel, Mumbai',
          guestCount: 50,
          totalPrice: 45000,
          status: 'upcoming',
          createdAt: '2024-05-15',
        },
        {
          id: 'BOOK003',
          service: 'Anniversary Celebration',
          date: '2024-12-25',
          time: '7:00 PM',
          location: 'The Lalit, Bengaluru',
          guestCount: 30,
          totalPrice: 35000,
          status: 'completed',
          createdAt: '2024-03-10',
        },
      ])
      setIsLoading(false)
    }
  }, [isAuthenticated, user])

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const upcomingBookings = bookings.filter((b) => b.status === 'upcoming')
  const completedBookings = bookings.filter((b) => b.status === 'completed')

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-background to-rose-light pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-8 text-white shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-display text-4xl font-bold mb-2">Hello, {user.fullName}!</h1>
                <p className="text-white/80">Welcome back to your DECOR dashboard</p>
              </div>
              <button
                onClick={() => logout()}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
                  <p className="font-display text-3xl font-bold text-foreground">{bookings.length}</p>
                </div>
                <Calendar className="text-primary opacity-20" size={40} />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Upcoming Events</p>
                  <p className="font-display text-3xl font-bold text-foreground">{upcomingBookings.length}</p>
                </div>
                <Users className="text-primary opacity-20" size={40} />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completed Events</p>
                  <p className="font-display text-3xl font-bold text-foreground">{completedBookings.length}</p>
                </div>
                <MapPin className="text-primary opacity-20" size={40} />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                  <p className="font-display text-3xl font-bold text-foreground">₹{(bookings.reduce((sum, b) => sum + b.totalPrice, 0) / 100000).toFixed(1)}L</p>
                </div>
                <DollarSign className="text-primary opacity-20" size={40} />
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-4 font-medium transition-all ${
                activeTab === 'overview'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-4 px-4 font-medium transition-all ${
                activeTab === 'profile'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Profile
            </button>
          </div>

          {/* Bookings Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6 pb-12">
              {/* Upcoming Bookings */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Upcoming Events</h2>
                {upcomingBookings.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {upcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-display font-bold text-foreground">{booking.service}</h3>
                            <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                            Upcoming
                          </span>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-3 text-sm">
                            <Calendar className="text-primary" size={18} />
                            <span>{new Date(booking.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} at {booking.time}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="text-primary" size={18} />
                            <span>{booking.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Users className="text-primary" size={18} />
                            <span>{booking.guestCount} Guests</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm font-medium">
                            <DollarSign className="text-secondary" size={18} />
                            <span>₹{booking.totalPrice.toLocaleString('en-IN')}</span>
                          </div>
                        </div>

                        <button className="w-full py-2.5 px-4 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          View Details
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-card rounded-2xl border border-border">
                    <Calendar className="mx-auto text-muted-foreground mb-4" size={48} />
                    <p className="text-muted-foreground mb-4">No upcoming events</p>
                    <a
                      href="/booking"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all"
                    >
                      Book Now
                      <ArrowRight size={18} />
                    </a>
                  </div>
                )}
              </div>

              {/* Completed Bookings */}
              {completedBookings.length > 0 && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Completed Events</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {completedBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all opacity-75"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-display font-bold text-foreground">{booking.service}</h3>
                            <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                            Completed
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm">
                            <Calendar className="text-muted-foreground" size={18} />
                            <span>{new Date(booking.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm font-medium">
                            <DollarSign className="text-secondary" size={18} />
                            <span>₹{booking.totalPrice.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="max-w-2xl pb-12">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Profile Information</h2>

                <div className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-2xl font-display font-bold">
                        {user.fullName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">{user.fullName}</h3>
                      <p className="text-sm text-muted-foreground">Member since {new Date(user.createdAt).toLocaleDateString('en-IN')}</p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-border pt-6">
                    <h3 className="font-medium text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="text-primary" size={20} />
                        <div>
                          <p className="text-xs text-muted-foreground">Email</p>
                          <p className="text-foreground font-medium">{user.email}</p>
                        </div>
                      </div>
                      {user.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="text-primary" size={20} />
                          <div>
                            <p className="text-xs text-muted-foreground">Phone</p>
                            <p className="text-foreground font-medium">{user.phone}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Settings */}
                  <div className="border-t border-border pt-6">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                      <Settings size={20} className="text-primary" />
                      <span className="font-medium text-foreground">Edit Profile</span>
                      <ArrowRight size={18} className="ml-auto text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
