import React, {useEffect, useState} from 'react'

const GreenLightRedLight = ({difficulty, onGameOver, onGameWin}) => {
  const [color, setColor] = useState('red')
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(40)
  const [gameOver, setGameOver] = useState(false)

  const endGame = (win = false) => {
    setGameOver(true)
    if (win) {
      onGameWin()
    } else {
      onGameOver()
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = color === 'red' ? 'green' : 'red'
      setColor(newColor)
    }, Math.random() * (2000 - 1000) + 1000)

    setTimeout(() => {
      clearInterval(intervalId)
      endGame()
    }, timeLeft * 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [color, timeLeft])

  const getWinningScore = diifficulty => {
    switch (diifficulty) {
      case 'Medium':
        return 15
      case 'Hard':
        return 25
      default:
        return 10
    }
  }

  const handleClick = () => {
    if (color === 'green') {
      setScore(score + 1)
      if (score + 1 === getWinningScore(difficulty)) {
        endGame(true)
      }
    } else {
      endGame()
    }
  }

  return (
    <div>
      <h2>Green Light Red Light Game</h2>
      {gameOver ? (
        <div>
          <h3>
            {score === getWinningScore(difficulty) ? 'You win!' : 'Game Over!'}
          </h3>
        </div>
      ) : (
        <div>
          <button
            className={`box ${color}`}
            onClick={handleClick}
            style={{cursor: color === 'green' ? 'pointer' : 'not-allowed'}}
          >
            .
          </button>
          <p>Score: {score}</p>
          <p>Time left: {timeLeft} seconds</p>
        </div>
      )}
    </div>
  )
}

export default GreenLightRedLight
