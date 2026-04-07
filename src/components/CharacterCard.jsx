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
        rounded-2xl border-4
        transition-all duration-200 cursor-pointer select-none
        w-48 h-56
      "
      style={{
        position: 'relative',
        overflow: 'hidden',
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
      {/* Avatar — fills entire card */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundColor: color.pastel,
      }}>
        {character.characterImage ? (
          <img
            src={character.characterImage}
            alt={character.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span className="text-6xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>{character.emoji}</span>
        )}
      </div>

      {/* Name — overlaid at bottom */}
      <span
        className="text-base font-bold tracking-widest"
        style={{
          position: 'absolute',
          bottom: '8px',
          left: 0, right: 0,
          textAlign: 'center',
          color: color.text,
        }}
      >
        {character.name.toUpperCase()}
      </span>
    </button>
  )
}
