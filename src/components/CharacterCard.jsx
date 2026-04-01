// Character selection card — retro pixel art style.
// Sharp corners, chunky border, hard pixel shadow.
// Hover: border highlights, shadow shifts. Selected: character color border + inset press.
export default function CharacterCard({ character, isSelected, onSelect, onHover }) {
  const { color } = character

  const baseStyle = {
    borderRadius: '4px',
    borderColor: isSelected ? color.border : 'rgba(255,255,255,0.8)',
    boxShadow: isSelected
      ? `inset 2px 2px 0px rgba(0,0,0,0.15), 0 0 0 2px ${color.border}`
      : '4px 4px 0px rgba(0,0,0,0.2)',
    transform: isSelected ? 'translate(2px, 2px)' : '',
    backgroundColor: color.pastel,
  }

  return (
    <button
      onClick={() => onSelect(character)}
      onMouseEnter={() => onHover(character)}
      className="
        flex flex-col items-center gap-4 p-5 border-4
        transition-all duration-100 cursor-pointer select-none
        w-48 h-56
      "
      style={baseStyle}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = color.border
          e.currentTarget.style.boxShadow = `4px 4px 0px ${color.border}`
        }
      }}
      onMouseOut={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'
          e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.2)'
        }
      }}
    >
      {/* Avatar */}
      <div
        className="w-24 h-24 flex items-center justify-center text-6xl flex-shrink-0 border-2 border-white/40"
        style={{ borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.4)' }}
      >
        {character.emoji}
      </div>

      {/* Name — always below avatar, never overlapping */}
      <span
        className="mt-auto"
        style={{ fontSize: '10px', color: color.text, letterSpacing: '0.05em' }}
      >
        {character.name.toUpperCase()}
      </span>
    </button>
  )
}
