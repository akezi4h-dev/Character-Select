export default function StatBars({ character }) {
  const color = character ? character.color.text : '#6CC2EE'
  const strength = character ? character.stats.strength : 0
  const ability = character ? character.stats.ability : 0

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '100%',
      maxWidth: '360px',
    }}>
      <StatRow label="STRENGTH" fill={strength} color={color} key={`str-${character?.id ?? 'empty'}`} />
      <StatRow label="ABILITY"  fill={ability}  color={color} key={`abl-${character?.id ?? 'empty'}`} />
    </div>
  )
}

function StatRow({ label, fill, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Label */}
      <span style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '8px',
        color: '#fff',
        textShadow: '1px 1px 0px rgba(0,0,0,0.3)',
        whiteSpace: 'nowrap',
        width: '76px',
        flexShrink: 0,
        textAlign: 'right',
      }}>
        {label}
      </span>

      {/* Glass container */}
      <div style={{
        flex: 1,
        height: '14px',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '999px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Fill */}
        <div style={{
          position: 'relative',
          height: '100%',
          backgroundColor: color,
          borderRadius: '999px',
          '--fill': `${fill}%`,
          animation: 'fillBar 0.6s ease-out forwards',
          width: 0,
        }}>
          {/* Gloss highlight */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '999px',
          }} />
        </div>
      </div>
    </div>
  )
}
