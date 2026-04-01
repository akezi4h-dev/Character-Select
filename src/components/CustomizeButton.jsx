// Customize button — retro pixel style. Near the kart.
export default function CustomizeButton() {
  return (
    <button
      className="px-5 py-2 text-emerald-600 bg-emerald-50 border-4 border-emerald-300 transition-all duration-100"
      style={{
        fontSize: '10px',
        borderRadius: '4px',
        boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(3px, 3px)'
        e.currentTarget.style.boxShadow = 'none'
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.2)'
      }}
    >
      [d] CUSTOMIZE
    </button>
  )
}
