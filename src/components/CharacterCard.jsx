export default function CharacterCard({ character, isSelected, onSelect, onHover, onLeave, nameFontSize = '10px' }) {
  const { color } = character

  return (
    <button
      onClick={() => onSelect(character)}
      onMouseEnter={() => onHover(character)}
      onMouseLeave={onLeave}
      style={{
        width: '200px',
        padding: '16px',
        borderRadius: '16px',
        border: `4px solid ${isSelected ? color.border : 'rgba(255,255,255,0.6)'}`,
        background: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(6px)',
        boxShadow: isSelected ? `0 0 20px 6px ${color.glow}` : '0 2px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        fontFamily: "'Press Start 2P', monospace",
      }}
    >
      {/* Avatar */}
      <div style={{
        width: '80px', height: '80px',
        borderRadius: '12px',
        background: color.pastel,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '48px',
        flexShrink: 0,
      }}>
        {character.emoji}
      </div>

      {/* Name */}
      <span style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: nameFontSize,
        color: color.text,
        letterSpacing: '0.05em',
      }}>
        {character.name.toUpperCase()}
      </span>
    </button>
  )
}
