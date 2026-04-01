import KartDisplay from './KartDisplay'
import CustomizeButton from './CustomizeButton'

// Right panel — full rewrite.
// Layout top to bottom, all centered: name → kart → kart label → customize button
// No portrait. Kart is the main focal point.
export default function CharacterPreview({ character }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '24px',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* Character name */}
      <div style={{ textAlign: 'center', minHeight: '24px' }}>
        {character ? (
          <p style={{
            fontSize: '13px',
            color: character.color.text,
            letterSpacing: '0.08em',
            fontFamily: "'Press Start 2P', monospace",
          }}>
            {character.name.toUpperCase()}
          </p>
        ) : (
          <p style={{
            fontSize: '10px',
            color: '#f9a8d4',
            letterSpacing: '0.05em',
            fontFamily: "'Press Start 2P', monospace",
          }}>
            SELECT A RACER
          </p>
        )}
      </div>

      {/* Kart — keyed to character.id so animation retrigggers on every new selection */}
      <KartDisplay key={character?.id ?? 'empty'} character={character} />

      <CustomizeButton />
    </div>
  )
}
