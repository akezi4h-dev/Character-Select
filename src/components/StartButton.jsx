// START button — fixed, centered at the bottom of the screen.
export default function StartButton({ disabled }) {
  return (
    <button
      disabled={disabled}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '11px',
        padding: '14px 40px',
        borderRadius: '999px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: disabled ? '#f9a8d4' : '#f472b6',
        color: 'white',
        opacity: disabled ? 0.5 : 1,
        boxShadow: disabled ? 'none' : '0 0 16px 4px rgba(244,114,182,0.4)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.boxShadow = '0 0 24px 6px rgba(244,114,182,0.6)'
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.boxShadow = '0 0 16px 4px rgba(244,114,182,0.4)'
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'translateX(-50%) scale(0.95)'
      }}
      onMouseUp={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'translateX(-50%)'
      }}
    >
      START ▶
    </button>
  )
}
