// Kart display — 450–500px wide, centered, never clipped.
// Kart slides in (z-index 1), shadow is static underneath (z-index 0).
export default function KartDisplay({ character }) {
  if (!character) {
    return (
      <div style={{
        width: '100%',
        maxWidth: '500px',
        height: '320px',
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      width: '100%',
    }}>

      {/* Kart + shadow container — centered, flex column */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '720px',
      }}>
        {/* Kart — fixed-size container so image never shifts layout */}
        <div style={{
          position: 'relative',
          width: '450px',
          height: '250px',
          flexShrink: 0,
        }}>
          <div
            className="kart-slide-in"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '450px',
              zIndex: 1,
              overflow: 'visible',
            }}
          >
            <span style={{ fontSize: '390px', lineHeight: 1.1, display: 'block' }}>🏎️</span>
          </div>
        </div>

        {/* Shadow — static, never animates, sits at bottom edge of kart */}
        <div style={{
          width: '340px',
          height: '35px',
          background: 'rgba(0, 0, 0, 0.15)',
          borderRadius: '50%',
          zIndex: 0,
          marginTop: '-15px',
          position: 'relative',
          flexShrink: 0,
        }} />
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
