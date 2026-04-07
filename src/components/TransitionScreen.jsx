import { useState, useEffect, useMemo } from 'react'

const CONFETTI_COLORS = [
  '#FF9BE8', '#FFE066', '#7FEFBD', '#80D8FF',
  '#FFB347', '#B39DDB', '#F48FB1', '#80CBC4',
]

function generateConfetti(count = 80) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    left: `${Math.random() * 100}%`,
    width: `${6 + Math.random() * 8}px`,
    height: `${10 + Math.random() * 8}px`,
    delay: `${Math.random() * 1.2}s`,
    duration: `${1.8 + Math.random() * 1.4}s`,
    rotate: `${Math.random() * 360}deg`,
    drift: `${(Math.random() - 0.5) * 120}px`,
  }))
}

export default function TransitionScreen({ character, bgImage, onComplete }) {
  const [fading, setFading] = useState(false)
  const confetti = useMemo(() => generateConfetti(80), [])

  useEffect(() => {
    // Start fade-out after kart animation finishes (2.5s)
    const fadeTimer = setTimeout(() => setFading(true), 3000)
    // Hide and return to select after fade completes (3s + 0.5s)
    const doneTimer = setTimeout(() => onComplete(), 3500)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  const textColor = character.color.text

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 9999,
      overflow: 'hidden',
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.5s ease',
    }}>

      {/* Character background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* White overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255,255,255,0.3)',
      }} />

      {/* Confetti particles */}
      {confetti.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-20px',
            left: p.left,
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            borderRadius: '2px',
            opacity: 0,
            animation: `confettiFall ${p.duration} ${p.delay} ease-in forwards`,
            '--drift': p.drift,
            '--rotate': p.rotate,
            zIndex: 2,
          }}
        />
      ))}

      {/* Title */}
      <div style={{
        position: 'absolute',
        top: '80px',
        left: 0, right: 0,
        textAlign: 'center',
        zIndex: 3,
      }}>
        <h1 style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '57px',
          letterSpacing: '0.1em',
          margin: 0,
          color: textColor,
          WebkitTextFillColor: textColor,
        }}>
          {character.name.toUpperCase()}
        </h1>
        <p
          className="get-ready"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '24px',
            letterSpacing: '0.1em',
            margin: '20px 0 0 0',
            '--char-color': textColor,
          }}
        >
          GET READY!
        </p>
      </div>

      {/* Kart driving across */}
      <div style={{
        position: 'absolute',
        top: '400px',
        left: 0,
        width: '500px',
        zIndex: 3,
        animation: 'driveAcross 3s ease-in forwards',
      }}>
        <img
          src={character.kartImage}
          alt={`${character.name}'s kart`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      <style>{`
        @keyframes confettiFall {
          0%   { opacity: 1; transform: translateY(0)      translateX(0)             rotate(0deg); }
          100% { opacity: 0; transform: translateY(110vh)  translateX(var(--drift))  rotate(720deg); }
        }
      `}</style>

    </div>
  )
}
