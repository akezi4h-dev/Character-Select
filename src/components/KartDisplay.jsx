// Kart display — no box, no border, just the kart floating freely.
// Slides in from the right every time a new character is selected.
// Animation retrigger is handled by the parent keying this component to character.id.
export default function KartDisplay({ character }) {
  if (!character) {
    return (
      <div style={{ minHeight: '120px' }} className="flex items-center justify-center">
        <span style={{ fontSize: '10px', color: '#cbd5e1', letterSpacing: '0.05em' }}>
          — — —
        </span>
      </div>
    )
  }

  return (
    <div className="kart-slide-in flex flex-col items-end gap-2 self-end pr-4">
      {/* Kart image — large, free-floating, no container */}
      <span style={{ fontSize: '130px', lineHeight: 1 }}>🏎️</span>

      {/* Kart name label */}
      <p style={{ fontSize: '9px', color: character.color.text, letterSpacing: '0.06em' }}>
        {character.name.toUpperCase()}'S KART
      </p>
    </div>
  )
}
