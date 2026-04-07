import { useState, useEffect } from 'react'

const KARTS = [
  {
    id: 'steve',
    src: '/Character-Select/images/karts/steve-kart.png',
    alt: "Steve's Kart",
    keyframe: 'slideInLeft',
    style: { bottom: '18%', left: '8%' },
  },
  {
    id: 'gurchen',
    src: '/Character-Select/images/karts/gurchen-kart.png',
    alt: "Gurchen's Kart",
    keyframe: 'slideInRight',
    style: { bottom: '18%', right: '8%' },
  },
  {
    id: 'gerald',
    src: '/Character-Select/images/karts/gerald-kart.png',
    alt: "Gerald's Kart",
    keyframe: 'slideInBottomLeft',
    style: { bottom: '8%', left: '22%' },
  },
  {
    id: 'barry',
    src: '/Character-Select/images/karts/barry-kart.png',
    alt: "Barry's Kart",
    keyframe: 'slideInBottomRight',
    style: { bottom: '8%', right: '22%' },
  },
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

      {/* Critter Cup title */}
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

      {/* Kart images */}
      {KARTS.map((kart) => (
        <img
          key={kart.id}
          src={kart.src}
          alt={kart.alt}
          style={{
            position: 'absolute',
            ...kart.style,
            width: '200px',
            imageRendering: 'pixelated',
            animation: `${kart.keyframe} 1s ease-out forwards`,
            animationDelay: '0.5s',
            opacity: 0,
            zIndex: 2,
          }}
        />
      ))}

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
            fontSize: '13px',
            padding: '17px 48px',
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

      <style>{`
        @keyframes titleFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-120vw); opacity: 0; }
          to   { transform: translateX(0);      opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(120vw);  opacity: 0; }
          to   { transform: translateX(0);      opacity: 1; }
        }
        @keyframes slideInBottomLeft {
          from { transform: translate(-120vw, 120vh); opacity: 0; }
          to   { transform: translate(0, 0);          opacity: 1; }
        }
        @keyframes slideInBottomRight {
          from { transform: translate(120vw, 120vh);  opacity: 0; }
          to   { transform: translate(0, 0);           opacity: 1; }
        }
      `}</style>
    </div>
  )
}
