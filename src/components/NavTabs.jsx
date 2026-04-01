import { useState } from 'react'

const TABS = ['CHARACTERS', 'ITEMS', 'POWER-UPS', 'KARTS']

export default function NavTabs() {
  const [active, setActive] = useState('CHARACTERS')

  return (
    <div className="flex gap-2 w-full">
      {TABS.map((tab) => {
        const isActive = active === tab
        return (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="flex-1 py-2 px-1 text-sky-600 bg-sky-100 border-2 border-sky-300 transition-all duration-100"
            style={{
              fontSize: '8px',
              borderRadius: '4px',
              boxShadow: isActive
                ? 'inset 2px 2px 0px rgba(0,0,0,0.2)'
                : '3px 3px 0px rgba(0,0,0,0.2)',
              transform: isActive ? 'translate(2px, 2px)' : '',
              backgroundColor: isActive ? '#bae6fd' : '#e0f2fe',
            }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
