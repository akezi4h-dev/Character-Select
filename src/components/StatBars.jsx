export default function StatBars({ character }) {
  const color = character ? character.color.text : '#6CC2EE'
  const strength = character ? character.stats.strength : 0
  const ability  = character ? character.stats.ability  : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      <StatRow label="STRENGTH" fill={strength} color={color} id={character?.id} />
      <StatRow label="ABILITY"  fill={ability}  color={color} id={character?.id} />
    </div>
  )
}

function StatRow({ label, fill, color, id }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {/* Label above bar */}
      <span
        className="gradient-title"
        data-text={label}
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '16px',
        }}
      >
        {label}
      </span>

      {/* Glass bar */}
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '2px solid rgba(255,255,255,0.7)',
        borderRadius: '999px',
        overflow: 'hidden',
        position: 'relative',
      }}>
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
