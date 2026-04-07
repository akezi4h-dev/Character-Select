import { useState } from 'react'
import DevGrid from './DevGrid'

// Order: Gurchen (0), Gerald (1), Steve (2), Barry (3)
const CHARACTERS = [
  { id: 'gurchen', delay: '0.5s' },
  { id: 'gerald',  delay: '0.9s' },
  { id: 'steve',   delay: '1.3s' },
  { id: 'barry',   delay: '1.7s' },
]

const GROUP_IMG = '/Character-Select/images/characters/characters-group.png'
const SECTION_W = 150
const SECTION_H = 350
const TOTAL_W   = SECTION_W * CHARACTERS.length // 600px

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
        backgroundImage: "url('/Character-Select/images/backgrounds/Default-Image.png')",
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
        <h1 style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '64px',
          color: 'white',
          WebkitTextFillColor: 'white',
          margin: 0,
          letterSpacing: '0.05em',
        }}>
          CRITTER CUP
        </h1>
      </div>

      {/* Character group — split into 4 clipped sections, staggered slide-up */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        width: `${TOTAL_W}px`,
        zIndex: 2,
      }}>
        {CHARACTERS.map((char, i) => (
          <div
            key={char.id}
            style={{
              width: `${SECTION_W}px`,
              height: `${SECTION_H}px`,
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <img
              src={GROUP_IMG}
              alt="Critter Cup characters"
              style={{
                position: 'absolute',
                bottom: 0,
                left: `${-i * SECTION_W}px`,
                width: `${TOTAL_W}px`,
                height: 'auto',
                imageRendering: 'pixelated',
                animation: `charSlideUp 0.6s ease-out ${char.delay} forwards`,
                transform: 'translateY(100%)',
              }}
            />
          </div>
        ))}
      </div>

      {/* PLAY button */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'titleFadeIn 0.6s ease forwards',
        animationDelay: '1.5s',
        opacity: 0,
        zIndex: 3,
      }}>
        <button
          onClick={handlePlay}
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '26px',
            padding: '34px 96px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#6CC2EE',
            color: 'white',
            boxShadow: '0 0 20px 6px rgba(108,194,238,0.6)',
            transition: 'box-shadow 0.3s, transform 0.1s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 32px 10px rgba(108,194,238,0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px 6px rgba(108,194,238,0.6)'
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
        @keyframes charSlideUp {
          from { transform: translateY(300px); }
          to   { transform: translateY(0);     }
        }
      `}</style>
    </div>
  )
}
