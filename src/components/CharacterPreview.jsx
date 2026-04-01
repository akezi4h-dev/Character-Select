import KartDisplay from './KartDisplay'
import CustomizeButton from './CustomizeButton'

// Right-panel large character + kart display.
// Shows placeholder when no character is selected.
export default function CharacterPreview({ character }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Large character display */}
      <div className="w-48 h-48 rounded-3xl bg-white/50 border-4 border-pink-200 shadow-lg flex items-center justify-center text-8xl">
        {character ? (character.emoji ?? '🐣') : '❓'}
      </div>

      {character && (
        <h2 className="text-2xl font-bold text-pink-400 tracking-wide">
          {character.name}
        </h2>
      )}

      <KartDisplay character={character} />
      <CustomizeButton />
    </div>
  )
}
