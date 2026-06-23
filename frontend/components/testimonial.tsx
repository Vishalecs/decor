'use client'

import React, { useState, useEffect, useRef } from 'react'

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

const AUTO_ROTATE_MS = 4000

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = reviews.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    setActiveIndex(((index % total) + total) % total)
  }

  // Auto-rotate every few seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, AUTO_ROTATE_MS)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [total])

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, AUTO_ROTATE_MS)
  }

  const handlePrev = () => {
    goTo(activeIndex - 1)
    resetTimer()
  }
  const handleNext = () => {
    goTo(activeIndex + 1)
    resetTimer()
  }
  const handleDot = (i: number) => {
    goTo(i)
    resetTimer()
  }

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #fff7fb 0%, #fff1f6 45%, #ffffff 100%)',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        overflowX: 'hidden',
        width: '100%',
      }}
      className="testimonials-section"
    >
      <style>{`
        .testimonials-section { padding: 60px 24px; }
        .testimonials-inner { max-width: 1100px; margin: 0 auto; }

        .testimonials-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* Mobile slideshow is built with a translateX track; hidden on desktop */
        .testimonials-slideshow { display: none; }

        .testimonials-stats {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 20px;
          padding: 14px 28px;
        }

        @media (max-width: 768px) {
          .testimonials-section { padding: 40px 16px; }
          .testimonials-header { margin-bottom: 24px !important; }
          .testimonials-badge {
            padding: 6px 14px !important;
            font-size: 12px !important;
            margin-bottom: 14px !important;
          }
          .testimonials-title { font-size: 28px !important; }
          .testimonials-subtitle { font-size: 13px !important; }
          .testimonials-stats {
            gap: 10px;
            padding: 12px 16px;
            border-radius: 20px !important;
            margin-top: 18px !important;
          }

          /* Hide the static desktop grid, show the slideshow instead */
          .testimonials-track { display: none !important; }

          .testimonials-slideshow {
            display: block !important;
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .testimonials-slideshow-track {
            display: flex;
            transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .testimonials-slide {
            flex: 0 0 100%;
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
            padding: 0 4px;
          }

          .testimonials-readall {
            padding: 12px 20px !important;
            font-size: 13px !important;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="testimonials-inner">

        {/* Header */}
        <div className="testimonials-header" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2
            className="testimonials-title text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] font-extrabold leading-[1.1] sm:leading-[1.06] text-[#1a0a0e] font-mont text-center" style={{ margin: '0 0 10px' }}
          >
            Loved by Thousands,<br />
            <span className="text-gradient">Trusted Forever</span>
          </h2>
          <p className="testimonials-subtitle" style={{ fontSize: '15px', color: '#666', margin: 0 }}>
            Real reviews from our happy customers
          </p>
        </div>

        {/* ===== Desktop static grid (3 cards) ===== */}
        <div style={{ position: 'relative' }}>
          <div className="testimonials-track">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* ===== Mobile slideshow: exactly one card visible, slides to the next ===== */}
          <div className="testimonials-slideshow">
            <div
              className="testimonials-slideshow-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="testimonials-slide">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows - control same activeIndex on both layouts */}
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            style={{
              position: 'absolute',
              left: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#fff',
              border: '1px solid #E0E0E0',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              color: '#333',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            }}
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            aria-label="Next review"
            style={{
              position: 'absolute',
              right: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#fff',
              border: '1px solid #E0E0E0',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              color: '#333',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            }}
          >
            ›
          </button>
        </div>

        {/* Dot Pagination */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: i === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === activeIndex ? '#C9386B' : '#E7D4E0',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
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
            className="testimonials-readall"
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
              maxWidth: '100%',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
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

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        border: review.featured ? '2px solid #C9386B' : '1px solid #F4E3EE',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'relative',
        boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      {review.featured && (
        <div
          style={{
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
          }}
        >
          ⭐ FEATURED
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
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
            }}
          >
            {review.initial}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111' }}>{review.name}</p>
            <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{review.timeAgo}</p>
          </div>
        </div>
      </div>

      <StarRating rating={review.rating} size={16} />

      <p
        style={{
          margin: 0,
          fontSize: '13px',
          color: '#444',
          lineHeight: '1.6',
          flex: 1,
        }}
      >
        {review.text}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12px',
          color: '#666',
          paddingTop: '8px',
          borderTop: '1px solid #F4E3EE',
        }}
      >
        <span style={{ fontSize: '16px', color: '#C9386B' }}>👍</span>
        Helpful ({review.helpful})
      </div>
    </div>
  )
}
