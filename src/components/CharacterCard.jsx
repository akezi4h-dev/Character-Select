// Character selection card.
// Hover: scale up, per-character border glow.
// Selected: highlighted border + persistent glow.
export default function CharacterCard({ character, isSelected, onSelect, onHover }) {
  const { color } = character

  return (
    <button
      onClick={() => onSelect(character)}
      onMouseEnter={() => onHover(character)}
      className="
        flex flex-col items-center gap-4 p-5 rounded-2xl border-4
        transition-all duration-200 cursor-pointer select-none
        bg-white/50 backdrop-blur-sm
        w-48 h-56
      "
      style={{
        borderColor: isSelected ? color.border : 'rgba(255,255,255,0.6)',
        boxShadow: isSelected ? `0 0 24px 8px ${color.glow}` : 'none',
        transform: isSelected ? 'scale(1.06)' : '',
      }}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = color.border
          e.currentTarget.style.boxShadow = `0 0 18px 5px ${color.glow}`
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
        className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden"
        style={{ backgroundColor: color.pastel }}
      >
        {character.characterImage ? (
          <img
            src={character.characterImage}
            alt={character.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span className="text-6xl">{character.emoji}</span>
        )}
      </div>

      {/* Name — always below the avatar, never overlapping */}
      <span
        className="text-base font-bold tracking-widest mt-auto"
        style={{ color: color.text }}
      >
        {character.name.toUpperCase()}
      </span>
    </button>
  )
}
