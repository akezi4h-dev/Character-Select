// Whimsical kart display for the selected character.
// Toy vehicle aesthetic — candy-like, heart accents, musical notes.
export default function KartDisplay({ character }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl">🏎️</div>
      <p className="text-xs text-pink-300 tracking-widest uppercase">
        {character ? `${character.name}'s Kart` : 'Select a racer'}
      </p>
    </div>
  )
}
