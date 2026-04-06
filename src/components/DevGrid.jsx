import { useState, useEffect, useCallback } from 'react'

export default function DevGrid() {
  const [on, setOn]       = useState(false)
  const [pos, setPos]     = useState({ x: 0, y: 0 })
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  // Toggle on G key
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.key === 'g' || e.key === 'G') && !e.target.matches('input, textarea')) {
        setOn(v => !v)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Track mouse position
  useEffect(() => {
    if (!on) return
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setCursor({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [on])

  // Log element info on click when grid is on
  const handleClick = useCallback((e) => {
    if (!on) return
    const rect = e.target.getBoundingClientRect()
    console.log('[DevGrid] clicked element:', {
      tag: e.target.tagName,
      class: e.target.className,
      top:    Math.round(rect.top),
      left:   Math.round(rect.left),
      width:  Math.round(rect.width),
      height: Math.round(rect.height),
    })
  }, [on])

  useEffect(() => {
    if (!on) return
    window.addEventListener('click', handleClick, true)
    return () => window.removeEventListener('click', handleClick, true)
  }, [on, handleClick])

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOn(v => !v)}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 9999,
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '8px',
          padding: '6px 10px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: on ? '#ef4444' : 'rgba(0,0,0,0.5)',
          color: '#fff',
          letterSpacing: '0.04em',
        }}
      >
        Grid [G]
      </button>

      {on && (
        <>
          {/* Pixel grid overlay */}
          <div style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            pointerEvents: 'none',
            zIndex: 9998,
            backgroundImage:
              'linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), ' +
              'linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '10px 10px',
          }} />

          {/* Cursor coordinate tracker */}
          <div style={{
            position: 'fixed',
            left: cursor.x + 14,
            top:  cursor.y + 14,
            zIndex: 9999,
            pointerEvents: 'none',
            backgroundColor: 'rgba(0,0,0,0.75)',
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: '11px',
            padding: '3px 8px',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
            letterSpacing: '0.05em',
          }}>
            x: {pos.x} &nbsp; y: {pos.y}
          </div>
        </>
      )}
    </>
  )
}
