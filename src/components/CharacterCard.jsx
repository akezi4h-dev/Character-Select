// Character selection card.
// Hover: scale up, per-character border glow, soft bounce.
// Selected: highlighted border + persistent glow.
export default function CharacterCard({ character, isSelected, onSelect, onHover }) {
  const { color } = character

  return (
    <button
      onClick={() => onSelect(character)}
      onMouseEnter={() => onHover(character)}
      className="
        flex flex-col items-center gap-3 p-4 rounded-2xl border-4
        transition-all duration-200 cursor-pointer select-none
        bg-white/50 backdrop-blur-sm
        w-32 h-36
      "
      style={{
        borderColor: isSelected ? color.border : 'rgba(255,255,255,0.6)',
        boxShadow: isSelected
          ? `0 0 20px 6px ${color.glow}`
          : 'none',
        transform: isSelected ? 'scale(1.06)' : '',
      }}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = color.border
          e.currentTarget.style.boxShadow = `0 0 14px 4px ${color.glow}`
          e.currentTarget.style.transform = 'scale(1.06)'
        }
      }}
      onMouseOut={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = ''
        }
      }}
    >
      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-4xl"
        style={{ backgroundColor: color.pastel }}
      >
        {character.emoji}
      </div>

      {/* Name */}
      <span
        className="text-sm font-bold tracking-wide"
        style={{ color: color.text }}
      >
        {character.name}
      </span>
    </button>
  )
}
