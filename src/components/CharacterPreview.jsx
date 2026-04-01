import KartDisplay from './KartDisplay'
import CustomizeButton from './CustomizeButton'

export default function CharacterPreview({ character }) {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Large character display */}
      <div
        className="
          w-44 h-44 rounded-3xl border-4 border-white/60
          bg-white/40 backdrop-blur-sm shadow-xl
          flex items-center justify-center text-8xl
          character-idle
        "
      >
        {character ? character.emoji : '❓'}
      </div>

      {/* Name or prompt */}
      <div className="text-center">
        {character ? (
          <h2
            className="text-2xl font-bold tracking-widest drop-shadow-sm"
            style={{ color: character.color.text }}
          >
            {character.name.toUpperCase()}
          </h2>
        ) : (
          <p className="text-lg font-semibold text-pink-300 tracking-wide">
            Select a Racer
          </p>
        )}
      </div>

      <KartDisplay character={character} />
      <CustomizeButton />
    </div>
  )
}
