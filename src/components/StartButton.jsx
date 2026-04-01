// Start button — bottom right. Big, rounded, pastel pink/mint, soft glow.
// Disabled until a character is selected.
export default function StartButton({ disabled }) {
  return (
    <button
      disabled={disabled}
      className={`
        px-10 py-3 rounded-full text-white font-bold text-lg tracking-wide
        transition-all duration-200
        ${disabled
          ? 'bg-pink-200 cursor-not-allowed opacity-50'
          : 'bg-pink-400 shadow-[0_0_16px_4px_rgba(244,114,182,0.4)] hover:scale-105 hover:shadow-[0_0_24px_6px_rgba(244,114,182,0.5)] active:scale-95'
        }
      `}
    >
      START ▶
    </button>
  )
}
