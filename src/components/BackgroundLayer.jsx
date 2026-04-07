import { THEMES } from '../data/themes'

// Full-screen background layer that swaps theme on character hover/select.
// Uses stacked divs with opacity transitions so gradients cross-fade smoothly.
export default function BackgroundLayer({ activeTheme }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Theme gradient layers — only the active one is visible */}
      {Object.entries(THEMES).map(([key, theme]) => (
        <div
          key={key}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: activeTheme === key ? 1 : 0,
            ...(theme.image ? {
              backgroundImage: `url('${theme.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              imageRendering: 'pixelated',
            } : {
              background: theme.gradient,
            }),
          }}
        />
      ))}

      {/* Subtle checkerboard overlay (racing reference) */}
      <div className="absolute inset-0 checkerboard-overlay" />

      {/* Floating theme elements */}
      {Object.entries(THEMES).map(([key, theme]) => (
        <div
          key={`floaters-${key}`}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: activeTheme === key ? 1 : 0 }}
        >
          {theme.floaters.map((f, i) => (
            <span
              key={i}
              className="absolute text-2xl select-none floater"
              style={{
                top: f.top,
                left: f.left,
                animationDelay: f.delay,
                animationDuration: f.duration,
              }}
            >
              {f.emoji}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
