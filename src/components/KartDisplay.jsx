// Kart display — main focal point, 350–400px wide, centered, free-floating.
// Slide-in animation retriggered by parent via key={character.id}.
export default function KartDisplay({ character }) {
  if (!character) {
    return (
      <div style={{
        width: '380px',
        height: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{
          fontSize: '10px',
          color: '#cbd5e1',
          letterSpacing: '0.05em',
          fontFamily: "'Press Start 2P', monospace",
        }}>
          — — —
        </span>
      </div>
    )
  }

  return (
    <div
      className="kart-slide-in"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Kart image — 350–400px wide, constrained, never overflows */}
      <div style={{
        width: '100%',
        maxWidth: '380px',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <span style={{ fontSize: '280px', lineHeight: 1 }}>🏎️</span>
      </div>

      {/* Kart name label */}
      <p style={{
        fontSize: '9px',
        color: character.color.text,
        letterSpacing: '0.06em',
        textAlign: 'center',
        fontFamily: "'Press Start 2P', monospace",
      }}>
        {character.name.toUpperCase()}'S KART
      </p>
    </div>
  )
}
