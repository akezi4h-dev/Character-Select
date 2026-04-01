// Kart display — main focal point of the right panel.
// Constrained to panel width, centered, never overflows.
// Slide-in animation retriggered by parent via key={character.id}.
export default function KartDisplay({ character }) {
  if (!character) {
    return (
      <div style={{
        width: '100%',
        maxWidth: '320px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ fontSize: '10px', color: '#cbd5e1', letterSpacing: '0.05em' }}>— — —</span>
      </div>
    )
  }

  return (
    <div
      className="kart-slide-in"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Kart image — constrained to panel, centered, never overflows */}
      <div style={{
        width: '100%',
        maxWidth: '320px',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <span style={{ fontSize: '220px', lineHeight: 1 }}>🏎️</span>
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
