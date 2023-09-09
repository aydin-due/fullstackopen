import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log('rendering...', count)
  const increase = () => setCount(count+1)
  const reset = () => setCount(0)
  return (
    <>
      {count}
      <button onClick={increase}>+</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
