import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  setTimeout(
    () => setCount(count + 1),
    1000
  )

  console.log('rendering...', count)

  return (
    <>
      {count}
    </>
  )
}

export default App
