// Start button — retro pixel style. Disabled until a character is selected.
export default function StartButton({ disabled }) {
  return (
    <button
      disabled={disabled}
      className="px-8 py-3 text-white border-4 transition-all duration-100"
      style={{
        fontSize: '11px',
        borderRadius: '4px',
        backgroundColor: disabled ? '#f9a8d4' : '#f472b6',
        borderColor: disabled ? '#fbcfe8' : '#ec4899',
        boxShadow: disabled ? 'none' : '4px 4px 0px rgba(0,0,0,0.25)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translate(3px, 3px)'
          e.currentTarget.style.boxShadow = 'none'
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.25)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = ''
        if (!disabled) e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.25)'
      }}
    >
      START &gt;&gt;
    </button>
  )
}
