export default function KartDisplay({ character }) {
  if (!character) return null

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>

      {/* Kart image — fills container width/height */}
      <div
        className="kart-slide-in"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
        }}
      >
        <span style={{ fontSize: '320px', lineHeight: 1, display: 'block' }}>🏎️</span>
      </div>

      {/* Static oval shadow */}
      <div style={{
        width: '280px',
        height: '24px',
        background: 'rgba(0,0,0,0.15)',
        borderRadius: '50%',
        flexShrink: 0,
      }} />

      {/* Kart label */}
      <p style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '8px',
        color: character.color.text,
        letterSpacing: '0.06em',
        margin: 0,
        textAlign: 'center',
      }}>
        {character.name.toUpperCase()}'S KART
      </p>

    </div>
  )
}
