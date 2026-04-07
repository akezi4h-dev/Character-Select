import { useState } from 'react'
import DevGrid from './DevGrid'

const KARTS = [
  { id: 'gurchen', src: '/Character-Select/images/karts/gurchen-kart.png', delay: '0.5s' },
  { id: 'gerald',  src: '/Character-Select/images/karts/gerald-kart.png',  delay: '0.9s' },
  { id: 'steve',   src: '/Character-Select/images/karts/steve-kart.png',   delay: '1.3s' },
  { id: 'barry',   src: '/Character-Select/images/karts/barry-kart.png',   delay: '1.7s' },
]

export default function TitleScreen({ onPlay }) {
  const [fading, setFading] = useState(false)

  const handlePlay = () => {
    setFading(true)
    setTimeout(() => onPlay(), 600)
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 99999,
      overflow: 'hidden',
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.6s ease',
    }}>

      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/Character-Select/images/backgrounds/Title-BG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        imageRendering: 'pixelated',
      }} />

      {/* White overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(255,255,255,0.3)',
      }} />

      {/* CRITTER CUP title */}
      <div style={{
        position: 'absolute',
        top: '12%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        animation: 'titleFadeIn 1.5s ease forwards',
        opacity: 0,
        zIndex: 2,
      }}>
        <h1 className="critter-title" style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '96px',
          margin: 0,
          letterSpacing: '0.05em',
        }}>
          CRITTER CUP
        </h1>
      </div>

      {/* Karts — drive in from right to left, staggered */}
      <div style={{
        position: 'absolute',
        top: '500px',
        left: '2px',
        display: 'flex',
        gap: '80px',
        alignItems: 'flex-end',
        zIndex: 2,
      }}>
        {KARTS.map((kart) => (
          <img
            key={kart.id}
            src={kart.src}
            alt={kart.id}
            style={{
              width: 'auto',
              height: '250px',
              display: 'block',
              imageRendering: 'pixelated',
              animation: `driveInFromRight 0.6s ease-out ${kart.delay} forwards`,
              transform: 'translateX(120vw)',
            }}
          />
        ))}
      </div>

      {/* PLAY button */}
      <div style={{
        position: 'absolute',
        top: '250px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'titleFadeIn 0.6s ease forwards',
        animationDelay: '1.5s',
        opacity: 0,
        zIndex: 3,
      }}>
        <button
          onClick={handlePlay}
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '19.5px',
            padding: '25.5px 72px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#353290',
            color: 'white',
            boxShadow: '0 0 20px 6px rgba(53,50,144,0.6)',
            transition: 'box-shadow 0.3s, transform 0.1s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 32px 10px rgba(53,50,144,0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px 6px rgba(53,50,144,0.6)'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)'
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <span style={{ color: 'white', WebkitTextFillColor: 'white' }}>PLAY ▶</span>
        </button>
      </div>

      {/* Dev grid overlay */}
      <DevGrid />

      <style>{`
        @keyframes titleFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes driveInFromRight {
          from { transform: translateX(120vw); }
          to   { transform: translateX(0);     }
        }
        @keyframes shine {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .critter-title {
          background: linear-gradient(
            105deg,
            #353290 0%,
            #6b68c4 40%,
            white   50%,
            #6b68c4 60%,
            #353290 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
