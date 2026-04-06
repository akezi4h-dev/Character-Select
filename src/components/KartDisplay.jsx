export default function KartDisplay({ character }) {
  if (!character) return null

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      flexShrink: 0,
    }}>

      {/* Fixed-size container — kart overflows visually but never shifts layout */}
      <div style={{
        position: 'relative',
        width: '420px',
        height: '240px',
        flexShrink: 0,
        overflow: 'visible',
      }}>
        <div
          className="kart-slide-in"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '420px',
            overflow: 'visible',
          }}
        >
          <span style={{ fontSize: '380px', lineHeight: 1, display: 'block' }}>🏎️</span>
        </div>
      </div>

      {/* Static oval shadow */}
      <div style={{
        width: '320px',
        height: '28px',
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
