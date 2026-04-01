// Kart display — main focal point, ~380–420px wide, never clipped.
// Slide-in animation on the kart only. Shadow is static and stays in place.
export default function KartDisplay({ character }) {
  if (!character) {
    return (
      <div style={{ width: '100%', maxWidth: '460px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '10px', color: '#cbd5e1', letterSpacing: '0.05em', fontFamily: "'Press Start 2P', monospace" }}>
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
      gap: '12px',
      width: '100%',
    }}>

      {/* Kart + shadow wrapper — relative so shadow can overlap kart bottom */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '460px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Ellipse shadow — static, does NOT animate, sits behind the kart */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '30px',
          background: 'rgba(0, 0, 0, 0.15)',
          borderRadius: '50%',
          zIndex: 0,
        }} />

        {/* Kart image — slides in, above shadow, max-width 90% so it never overflows */}
        <div
          className="kart-slide-in"
          style={{ position: 'relative', zIndex: 1, width: '90%', display: 'flex', justifyContent: 'center' }}
        >
          <span style={{ fontSize: '320px', lineHeight: 1.1, display: 'block' }}>🏎️</span>
        </div>
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
