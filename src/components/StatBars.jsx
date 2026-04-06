// Pixel stat bars — shown where NavTabs used to be.
// Bars animate from 0% to their value when a character is selected.
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
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }}>
      {/* Label */}
      <span style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '8px',
        color: '#fff',
        textShadow: '1px 1px 0px rgba(0,0,0,0.4)',
        whiteSpace: 'nowrap',
        width: '76px',
        flexShrink: 0,
        textAlign: 'right',
      }}>
        {label}
      </span>

      {/* Bar container */}
      <div style={{
        flex: 1,
        height: '20px',
        backgroundColor: 'rgba(255,255,255,0.9)',
        border: '4px solid white',
        borderRadius: 0,
        overflow: 'hidden',
        boxShadow: '3px 3px 0px rgba(0,0,0,0.25)',
        imageRendering: 'pixelated',
      }}>
        {/* Fill */}
        <div style={{
          height: '100%',
          backgroundColor: color,
          imageRendering: 'pixelated',
          '--fill': `${fill}%`,
          animation: 'fillBar 0.6s ease-out forwards',
          width: 0,
        }} />
      </div>
    </div>
  )
}
