// Back button — bottom left. Small, rounded, pastel, arrow icon.
export default function BackButton() {
  return (
    <button className="
      flex items-center gap-2 px-5 py-2 rounded-full
      bg-sky-100 border-2 border-sky-200 text-sky-400 font-semibold text-sm
      hover:scale-105 hover:border-sky-300 transition-all duration-200
    ">
      ← Back
    </button>
  )
}
