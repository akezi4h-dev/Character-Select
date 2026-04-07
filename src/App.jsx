import { useState } from 'react'
import GameMenu from './components/GameMenu'
import TitleScreen from './components/TitleScreen'

export default function App() {
  const [showTitle, setShowTitle] = useState(true)

  return (
    <>
      <GameMenu />
      {showTitle && <TitleScreen onPlay={() => setShowTitle(false)} />}
    </>
  )
}
