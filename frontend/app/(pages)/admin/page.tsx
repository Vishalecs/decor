'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Users, ShoppingCart, IndianRupee, ArrowUpRight, ArrowDownRight, MoreVertical, Eye, Edit, Trash2, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard')

  // Sample analytics data
  const revenueData = [
    { month: 'Jan', revenue: 45000, orders: 24 },
    { month: 'Feb', revenue: 52000, orders: 31 },
    { month: 'Mar', revenue: 48000, orders: 28 },
    { month: 'Apr', revenue: 61000, orders: 39 },
    { month: 'May', revenue: 55000, orders: 35 },
    { month: 'Jun', revenue: 78000, orders: 48 },
  ]

  const servicePerformance = [
    { name: 'Wedding', value: 35, color: '#c1216e' },
    { name: 'Birthday', value: 25, color: '#d4a574' },
    { name: 'Anniversary', value: 20, color: '#e8b4c8' },
    { name: 'Corporate', value: 15, color: '#f0d9e8' },
    { name: 'Others', value: 5, color: '#fce4ec' },
  ]

  const recentBookings = [
    { id: 'BOOK001', service: 'Wedding Decoration', client: 'Rajesh Kumar', amount: 125000, status: 'Confirmed', date: '2025-08-15' },
    { id: 'BOOK002', service: 'Birthday Decoration', client: 'Priya Singh', amount: 45000, status: 'Pending', date: '2025-07-20' },
    { id: 'BOOK003', service: 'Anniversary Decoration', client: 'Amit Patel', amount: 35000, status: 'Completed', date: '2025-06-10' },
    { id: 'BOOK004', service: 'Corporate Event', client: 'TechCorp Ltd', amount: 85000, status: 'In Progress', date: '2025-08-25' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Confirmed':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">DECOR Admin</h1>
            <p className="text-sm text-muted-foreground">Event Decoration Management System</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-shadow">
              Download Report
            </button>
            <button className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">
              Admin Profile
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border pb-4">
          {['dashboard', 'services', 'bookings', 'customers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveNav(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                activeNav === tab
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeNav === 'dashboard' && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
                    <h3 className="text-3xl font-bold text-foreground">₹8,50,000</h3>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <ArrowUpRight size={16} /> +12.5% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IndianRupee size={24} className="text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Total Orders</p>
                    <h3 className="text-3xl font-bold text-foreground">205</h3>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <ArrowUpRight size={16} /> +8.2% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <ShoppingCart size={24} className="text-secondary" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Active Customers</p>
                    <h3 className="text-3xl font-bold text-foreground">1,234</h3>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <ArrowUpRight size={16} /> +5.1% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Users size={24} className="text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Conversion Rate</p>
                    <h3 className="text-3xl font-bold text-foreground">24.5%</h3>
                    <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                      <ArrowDownRight size={16} /> -2.3% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <TrendingUp size={24} className="text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-6">Revenue & Orders Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e8" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#faf7f5', border: '1px solid #d4a574' }}
                      labelStyle={{ color: '#1a1a1a' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#c1216e" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Service Performance */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-6">Service Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={servicePerformance}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {servicePerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-6 space-y-2">
                  {servicePerformance.map((service) => (
                    <div key={service.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }}></div>
                        <span className="text-foreground">{service.name}</span>
                      </div>
                      <span className="text-muted-foreground">{service.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Bookings Table */}
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-bold text-foreground">Recent Bookings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Booking ID</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Service</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Client</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-primary">{booking.id}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{booking.service}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{booking.client}</td>
                        <td className="px-6 py-4 text-sm font-medium text-foreground">₹{booking.amount.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{booking.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-muted rounded transition-colors" title="View">
                              <Eye size={16} className="text-muted-foreground" />
                            </button>
                            <button className="p-1 hover:bg-muted rounded transition-colors" title="Edit">
                              <Edit size={16} className="text-muted-foreground" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeNav === 'services' && (
          <div className="bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Service Management</h3>
              <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-shadow">
                Add New Service
              </button>
            </div>
            <p className="text-muted-foreground">Service management interface coming soon...</p>
          </div>
        )}

        {activeNav === 'bookings' && (
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">Booking Management</h3>
            <p className="text-muted-foreground">Booking management interface coming soon...</p>
          </div>
        )}

        {activeNav === 'customers' && (
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">Customer Management</h3>
            <p className="text-muted-foreground">Customer management interface coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
