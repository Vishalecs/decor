'use client'

import React, { useState } from 'react'

const GoogleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const StarRating = ({ rating = 5, size = 16 }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i <= rating ? '#F5A623' : '#E0E0E0'}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

const reviews = [
  {
    id: 1,
    name: 'Rohit Sharma',
    initial: 'R',
    avatarColor: '#7B5EA7',
    timeAgo: '2 weeks ago',
    rating: 5,
    text: 'Excellent service and great support! The team was very professional and resolved my queries quickly. Highly recommended!',
    helpful: 12,
    featured: false,
  },
  {
    id: 2,
    name: 'Priya Mehta',
    initial: 'P',
    avatarColor: '#2E7D32',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'Amazing experience! The product quality is top-notch and the customer service is always available to help. Will definitely come back again.',
    helpful: 18,
    featured: true,
  },
  {
    id: 3,
    name: 'Amit Verma',
    initial: 'A',
    avatarColor: '#1565C0',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'Very satisfied with their service. Everything was smooth and transparent. Great value for money. Thanks!',
    helpful: 15,
    featured: false,
  },
  {
    id: 4,
    name: 'Sunita Joshi',
    initial: 'S',
    avatarColor: '#C62828',
    timeAgo: '2 months ago',
    rating: 5,
    text: 'Absolutely loved working with them. Quick turnaround and the quality exceeded our expectations. Will recommend to everyone!',
    helpful: 9,
    featured: false,
  },
  {
    id: 5,
    name: 'Karan Malhotra',
    initial: 'K',
    avatarColor: '#E65100',
    timeAgo: '2 months ago',
    rating: 5,
    text: 'Top-notch experience from start to finish. The team was responsive and delivered exactly as promised. Very happy customer!',
    helpful: 11,
    featured: false,
  },
  {
    id: 6,
    name: 'Meera Nair',
    initial: 'M',
    avatarColor: '#6A1B9A',
    timeAgo: '3 months ago',
    rating: 5,
    text: 'Outstanding work! They understood our requirements perfectly and delivered beyond expectations. Truly professional team.',
    helpful: 14,
    featured: false,
  },
]

const CARDS_PER_PAGE = 3

export function Testimonials() {
  const [page, setPage] = useState(0)

  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE)
  const visibleReviews = reviews.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE)

  return (
    <section style={{
      background: 'linear-gradient(180deg, #fff7fb 0%, #fff1f6 45%, #ffffff 100%)',
      padding: '60px 24px',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      minHeight: '600px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          {/* Google Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#fff',
            border: '1px solid #F5C0DB',
            borderRadius: '50px',
            padding: '8px 18px',
            marginBottom: '20px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#4B1859',
          }}>
            <GoogleIcon />
            Google Reviews
          </div>

          <h2 style={{
            fontFamily: 'Montserrat, Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '40px',
            fontWeight: '800',
            color: '#1a0a0e',
            margin: '0 0 10px',
            lineHeight: '1.06',
            letterSpacing: '-0.5px',
          }}>
            Loved by Thousands,<br />
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #C9386B 0%, #9B2A8F 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}>
              Trusted Forever
            </span>
          </h2>
          <p style={{ fontSize: '15px', color: '#666', margin: 0 }}>
            Real reviews from our happy customers on Google
          </p>

          {/* Stats Row */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px',
            background: '#fff',
            border: '1px solid #F5C0DB',
            borderRadius: '50px',
            padding: '14px 28px',
            marginTop: '24px',
            boxShadow: '0 18px 40px rgba(201, 56, 107, 0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '22px', fontWeight: '700', color: '#1a0a0e' }}>4.8</span>
              <StarRating rating={5} size={18} />
            </div>
            <div style={{ width: '1px', height: '28px', background: '#F5C0DB' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '18px', fontWeight: '700', color: '#1a0a0e' }}>125+</span>
              <span style={{ fontSize: '13px', color: '#666' }}>Google Reviews</span>
            </div>
            <div style={{ width: '1px', height: '28px', background: '#F5C0DB' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                width: '18px', height: '18px',
                background: '#C9386B',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '11px',
                fontWeight: '700',
                flexShrink: 0,
              }}>✓</span>
              <span style={{ fontSize: '13px', color: '#C9386B', fontWeight: '500' }}>Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{ position: 'relative' }}>
          {/* Nav Buttons */}
          {page > 0 && (
            <button
              onClick={() => setPage(p => p - 1)}
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#fff',
                border: '1px solid #E0E0E0',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                color: '#333',
              }}
            >
              ‹
            </button>
          )}
          {page < totalPages - 1 && (
            <button
              onClick={() => setPage(p => p + 1)}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#fff',
                border: '1px solid #E0E0E0',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                color: '#333',
              }}
            >
              ›
            </button>
          )}

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  border: review.featured ? '2px solid #C9386B' : '1px solid #F4E3EE',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  position: 'relative',
                }}
              >
                {/* Featured Badge */}
                {review.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FEF3CD',
                    border: '1px solid #F5C518',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#7A5C00',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    ⭐ FEATURED
                  </div>
                )}

                {/* Card Top */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: review.avatarColor,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: '600',
                      flexShrink: 0,
                    }}>
                      {review.initial}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111' }}>{review.name}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{review.timeAgo}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} size={16} />

                {/* Review Text */}
                <p style={{
                  margin: 0,
                  fontSize: '13px',
                  color: '#444',
                  lineHeight: '1.6',
                  flex: 1,
                }}>
                  {review.text}
                </p>

                {/* Helpful */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: '#666',
                  paddingTop: '8px',
                  borderTop: '1px solid #F4E3EE',
                }}>
                  <span style={{ fontSize: '16px', color: '#C9386B' }}>👍</span>
                  Helpful ({review.helpful})
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Pagination */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === page ? '#C9386B' : '#E7D4E0',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>

        {/* Read All Button */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#fff',
              border: '1.5px solid #C9386B',
              borderRadius: '50px',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: '500',
              color: '#C9386B',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            <GoogleIcon />
            Read all reviews on Google
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9386B" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}