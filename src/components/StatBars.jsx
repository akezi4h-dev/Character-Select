export default function StatBars({ character }) {
  const color = character ? character.color.text : '#6CC2EE'
  const strength = character ? character.stats.strength : 0
  const ability  = character ? character.stats.ability  : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <StatRow label="STRENGTH" fill={strength} color={color} id={character?.id} />
      <StatRow label="ABILITY"  fill={ability}  color={color} id={character?.id} />
    </div>
  )
}

function StatRow({ label, fill, color, id }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '8px',
        color: color,
        whiteSpace: 'nowrap',
        width: '72px',
        flexShrink: 0,
        textAlign: 'right',
        textShadow: '1px 1px 0 rgba(0,0,0,0.15)',
      }}>
        {label}
      </span>

      {/* Glass container */}
      <div style={{
        flex: 1,
        height: '14px',
        background: 'rgba(255,255,255,0.4)',
        border: '2px solid rgba(255,255,255,0.7)',
        borderRadius: '999px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Animated fill */}
        <div
          key={`${id}-${label}`}
          style={{
            position: 'relative',
            height: '100%',
            backgroundColor: color,
            borderRadius: '999px',
            '--fill': `${fill}%`,
            animation: 'fillBar 0.6s ease-out forwards',
            width: 0,
          }}
        >
          {/* Gloss shine */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '50%',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '999px',
          }} />
        </div>
      </div>
    </div>
  )
}
