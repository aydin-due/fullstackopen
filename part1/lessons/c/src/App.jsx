import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  console.log('rendering...', count)

  return (
    <>
      {count}
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </>
  )
}

export default App
