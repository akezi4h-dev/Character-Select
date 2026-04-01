// Kart display for the selected character.
// Placeholder until real kart art is added.
export default function KartDisplay({ character }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-5xl">🏎️</div>
      <p className="text-xs font-semibold tracking-widest uppercase text-pink-300">
        {character ? `${character.name}'s Kart` : '— — —'}
      </p>
    </div>
  )
}
