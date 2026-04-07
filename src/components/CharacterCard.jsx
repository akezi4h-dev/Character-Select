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
        rounded-2xl
        transition-all duration-200 cursor-pointer select-none
        w-48 h-56
      "
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: '4px solid transparent',
        backgroundImage: isSelected
          ? 'none'
          : 'linear-gradient(transparent, transparent), linear-gradient(to bottom, #51A0C8, #6CC2EE, #B3E5FF)',
        backgroundOrigin: 'padding-box, border-box',
        backgroundClip: 'padding-box, border-box',
        borderColor: isSelected ? color.border : 'transparent',
        boxShadow: isSelected ? `0 0 24px 8px ${color.glow}` : 'none',
        transform: isSelected ? 'scale(1.06)' : '',
      }}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundImage = 'none'
          e.currentTarget.style.borderColor = color.border
          e.currentTarget.style.boxShadow = `0 0 18px 5px ${color.glow}`
          e.currentTarget.style.transform = 'scale(1.06)'
        }
      }}
      onMouseOut={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundImage = 'linear-gradient(transparent, transparent), linear-gradient(to bottom, #51A0C8, #6CC2EE, #B3E5FF)'
          e.currentTarget.style.borderColor = 'transparent'
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
        className="card-name text-base font-bold tracking-widest"
        style={{
          position: 'absolute',
          bottom: '8px',
          left: 0, right: 0,
          textAlign: 'center',
          '--char-color': isSelected ? color.text : undefined,
        }}
      >
        {character.name.toUpperCase()}
      </span>
    </button>
  )
}
