export default function KartDisplay({ character }) {
  if (!character) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120px',
      }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '10px',
          color: '#cbd5e1',
          letterSpacing: '0.05em',
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
      overflow: 'visible',
    }}>

      {/* Kart — slides in, ~350px wide */}
      <div
        className="kart-slide-in"
        style={{ overflow: 'visible', zIndex: 1, position: 'relative' }}
      >
        <span style={{ fontSize: '300px', lineHeight: 1, display: 'block' }}>🏎️</span>
      </div>

      {/* Static ellipse shadow — does not animate */}
      <div style={{
        width: '200px',
        height: '20px',
        background: 'rgba(0,0,0,0.15)',
        borderRadius: '50%',
        marginTop: '-10px',
        zIndex: 0,
        flexShrink: 0,
      }} />

      {/* Kart label */}
      <p style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '7px',
        color: character.color.text,
        letterSpacing: '0.06em',
        textAlign: 'center',
        marginTop: '8px',
        margin: '8px 0 0 0',
      }}>
        {character.name.toUpperCase()}'S KART
      </p>
    </div>
  )
}
