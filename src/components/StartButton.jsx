// START button — fixed, centered at the bottom of the screen.
export default function StartButton({ disabled, activeColor = '#6CC2EE', activeGlow = 'rgba(108,194,238,0.6)', onClick }) {
  const idleGlow = disabled ? 'none' : `0 0 16px 4px ${activeColor}88`
  const hoverGlow = `0 0 28px 8px ${activeGlow}`

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '13px',
        padding: '17px 48px',
        borderRadius: '999px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: disabled ? '#b0d4e8' : activeColor,
        color: 'white',
        opacity: disabled ? 0.6 : 1,
        boxShadow: idleGlow,
        transition: 'background-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.boxShadow = hoverGlow
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.boxShadow = idleGlow
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'translateX(-50%) scale(0.95)'
      }}
      onMouseUp={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'translateX(-50%)'
      }}
    >
      <span style={{ color: 'white', WebkitTextFillColor: 'white' }}>START ▶</span>
    </button>
  )
}
