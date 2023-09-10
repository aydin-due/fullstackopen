import { useState } from 'react'
import './App.css'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    // can also just push method but it's not recomemended since it mutates the original array
    // whereas concat method returns a copy of the array + the new item
    setAll(allClicks.concat('L'))
    // set state is asynchronous, so it doesn't update instantly
    // it's best to declare a new value and set it manually than to wait for the update in other components
    // bc it might not render w/ the updated value
    const updatedLeft = left+1
    setLeft(updatedLeft)
    setTotal(updatedLeft+right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right+1
    setRight(updatedRight)
    setTotal(left+updatedRight)
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
      <p>total {total}</p>
    </div>
  )
}
export default App
