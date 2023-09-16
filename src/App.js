import React, {useState} from 'react'
import UserRegistration from './components/UserRegistration'
import GreenLightRedLight from './components/GreenLightRedLight'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [userData, setUserData] = useState(null)

  const startGame = data => {
    setGameStarted(true)
    setUserData(data)
  }

  const handleGameWin = () => {
    setGameWon(true)
  }

  const handleGameOver = () => {
    setGameOver(true)
  }

  return (
    <div className="App">
      {!gameStarted && <UserRegistration onStartGame={startGame} />}
      {gameStarted && !gameOver && (
        <GreenLightRedLight
          difficulty={userData.difficulty}
          onGameWin={handleGameWin}
          onGameOver={handleGameOver}
        />
      )}
    </div>
  )
}

export default App
