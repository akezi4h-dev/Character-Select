import { useState } from 'react'

const TABS = ['ITEMS', 'POWER UPS', 'KARTS']

export default function NavTabs() {
  const [active, setActive] = useState(null)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
      {TABS.map((tab) => {
        const isActive = active === tab
        return (
          <button
            key={tab}
            onClick={() => setActive(isActive ? null : tab)}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '9px',
              padding: '10px 16px',
              borderRadius: '4px',
              border: '3px solid rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.1s',
              backgroundColor: isActive ? '#7dd3fc' : '#bae6fd',
              color: '#0369a1',
              boxShadow: isActive
                ? 'inset 2px 2px 0px rgba(0,0,0,0.2)'
                : '3px 3px 0px rgba(0,0,0,0.2)',
              transform: isActive ? 'translate(2px, 2px)' : '',
            }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
