import KartDisplay from './KartDisplay'
import CustomizeButton from './CustomizeButton'

// Right panel layout (top to bottom):
// 1. Character name in pixel font
// 2. Large centered kart — main focal point, no portrait
// 3. Kart name label
// 4. Customize button
export default function CharacterPreview({ character }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full h-full">

      {/* Character name or idle prompt */}
      <div style={{ minHeight: '24px', textAlign: 'center' }}>
        {character ? (
          <p style={{ fontSize: '13px', color: character.color.text, letterSpacing: '0.08em' }}>
            {character.name.toUpperCase()}
          </p>
        ) : (
          <p style={{ fontSize: '10px', color: '#f9a8d4', letterSpacing: '0.05em' }}>
            SELECT A RACER
          </p>
        )}
      </div>

      {/* Kart — keyed to character id, remounts on every new selection to retrigger animation */}
      <KartDisplay key={character?.id ?? 'empty'} character={character} />

      <CustomizeButton />
    </div>
  )
}
