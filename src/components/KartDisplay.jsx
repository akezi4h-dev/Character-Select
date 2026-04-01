// Kart display — main focal point of the right panel.
// Large, centered, free-floating — no box, no border.
// Slides in from the right on every character selection.
// Parent keys this component to character.id to retrigger animation on each new pick.
export default function KartDisplay({ character }) {
  if (!character) {
    return (
      <div style={{ width: '280px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '10px', color: '#cbd5e1', letterSpacing: '0.05em' }}>— — —</span>
      </div>
    )
  }

  return (
    <div
      className="kart-slide-in"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
    >
      {/* Kart image — 250–300px wide, free-floating, no container */}
      <span style={{ fontSize: '240px', lineHeight: 1, display: 'block', textAlign: 'center' }}>
        🏎️
      </span>

      {/* Kart name label */}
      <p style={{ fontSize: '9px', color: character.color.text, letterSpacing: '0.06em', textAlign: 'center' }}>
        {character.name.toUpperCase()}'S KART
      </p>
    </div>
  )
}
