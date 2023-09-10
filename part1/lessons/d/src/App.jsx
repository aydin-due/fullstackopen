import { useState } from 'react'
import './App.css'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    // can also just push method but it's not recomemended since it mutates the original array
    // whereas concat method returns a copy of the array + the new item
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setLeft(right+1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
export default App
