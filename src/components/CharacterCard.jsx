// Each character card in the selection grid.
// Hover: scale up, border glow, soft bounce.
// Selected: highlight + soft glow.
export default function CharacterCard({ character, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(character)}
      className={`
        flex flex-col items-center gap-2 p-3 rounded-2xl border-4 transition-all duration-200
        cursor-pointer select-none
        ${isSelected
          ? 'border-pink-400 shadow-[0_0_16px_4px_rgba(244,114,182,0.5)] scale-105'
          : 'border-pink-200 hover:border-pink-300 hover:scale-105 hover:shadow-[0_0_12px_2px_rgba(244,114,182,0.3)]'
        }
        bg-white/60
      `}
    >
      {/* Avatar placeholder */}
      <div className="w-16 h-16 rounded-xl bg-pink-100 flex items-center justify-center text-3xl">
        {character.emoji ?? '🐣'}
      </div>
      <span className="text-xs font-semibold text-pink-500 tracking-wide">
        {character.name}
      </span>
    </button>
  )
}
