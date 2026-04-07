import { useState, useEffect } from 'react'

export default function TransitionScreen({ character, bgImage, onComplete }) {
  const [fading, setFading] = useState(false)

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

      {/* Title */}
      <div style={{
        position: 'absolute',
        top: '80px',
        left: 0, right: 0,
        textAlign: 'center',
        zIndex: 1,
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
        zIndex: 1,
        animation: 'driveAcross 3s ease-in forwards',
      }}>
        <img
          src={character.kartImage}
          alt={`${character.name}'s kart`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

    </div>
  )
}
