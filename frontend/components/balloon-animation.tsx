'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

type Balloon = {
  id: number;
  left: number; // percentage
  color: string;
  size: number; // px
  duration: number; // seconds
};

const colors = [
  '#FF6B6B', '#4ECDC4', '#FFE66D', '#FFA500', '#9B59B6',
  '#3498DB', '#E74C3C', '#2ECC71', '#F1C40F', '#E67E22',
  '#1ABC9C', '#34495E', '#FF5722', '#795548', '#607D8B'
];

export default function BalloonAnimation() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const nextIdRef = useRef(1);

  useEffect(() => {
    // Inject keyframes into document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        from { bottom: -100px; }
        to { bottom: 100vh; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const addBalloon = useCallback(() => {
    const left = Math.random() * 90 + 5; // 5% to 95%
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 30) + 30; // 30-60px
    const duration = Math.floor(Math.random() * 10) + 15; // 15-25s
    const id = nextIdRef.current;
    nextIdRef.current += 1;
    setBalloons(prev => [...prev, { id, left, color, size, duration }]);
    // Remove after duration + 1s
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => b.id !== id));
    }, (duration + 1) * 1000);
  }, []);

  useEffect(() => {
    // Determine initial count based on viewport width
    const isMobile = window.innerWidth < 768;
    const initialCount = isMobile ? 2 : 4;
    // Spawn initial balloons
    for (let i = 0; i < initialCount; i++) {
      addBalloon();
    }
    const interval = setInterval(addBalloon, 10000);
    return () => clearInterval(interval);
  }, [addBalloon]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 50 }}>
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className="absolute"
          style={{
            left: `${balloon.left}%`,
            bottom: '-100px',
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            backgroundColor: balloon.color,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            animation: `floatUp ${balloon.duration}s linear forwards`,
            boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.1)',
          } as React.CSSProperties}
        >
          {/* Knot */}
          <div
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: `8px solid ${balloon.color}`,
            }}
          />
          {/* String */}
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              height: '22px',
              background: 'rgba(0,0,0,0.4)',
            }}
          />
          {/* Shine */}
          <div
            style={{
              position: 'absolute',
              top: '15%',
              left: '20%',
              width: '20%',
              height: '10%',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              transform: 'rotate(-45deg)',
            }}
          />
        </div>
      ))}
    </div>
  );
}
