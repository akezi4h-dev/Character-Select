import KartDisplay from './KartDisplay'
import CustomizeButton from './CustomizeButton'

// Right panel layout (top to bottom):
// 1. Large floating character portrait — no box, no border
// 2. Character name in pixel font
// 3. Kart sliding in from right — key={character?.id} remounts on selection, restarting animation
// 4. Kart name label
// 5. Customize button
export default function CharacterPreview({ character }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">

      {/* Character portrait — free-floating, no card/box/border */}
      <div className="character-idle" style={{ lineHeight: 1 }}>
        <span style={{ fontSize: '110px' }}>
          {character ? character.emoji : '❓'}
        </span>
      </div>

      {/* Name or idle prompt */}
      <div className="text-center" style={{ minHeight: '28px' }}>
        {character ? (
          <p style={{ fontSize: '12px', color: character.color.text, letterSpacing: '0.08em' }}>
            {character.name.toUpperCase()}
          </p>
        ) : (
          <p style={{ fontSize: '10px', color: '#f9a8d4', letterSpacing: '0.05em' }}>
            SELECT A RACER
          </p>
        )}
      </div>

      {/* Kart — keyed to character id so it remounts (and re-animates) on every new selection */}
      <KartDisplay key={character?.id ?? 'empty'} character={character} />

      <CustomizeButton />
    </div>
  )
}
