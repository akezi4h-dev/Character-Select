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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
        }}
      >
        <img
            src={character.kartImage}
            alt={`${character.name}'s kart`}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
      </div>


      {/* Kart label */}
      <p
        className="gradient-title"
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '8px',
          letterSpacing: '0.06em',
          margin: 0,
          textAlign: 'center',
        }}
      >
        {character.name.toUpperCase()}'S KART
      </p>

    </div>
  )
}
