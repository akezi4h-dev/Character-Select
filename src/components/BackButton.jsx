// Back button — retro pixel style. Bottom left.
export default function BackButton() {
  return (
    <button
      className="px-5 py-2 text-sky-600 bg-sky-100 border-4 border-sky-300 transition-all duration-100"
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
      &lt;&lt; BACK
    </button>
  )
}
