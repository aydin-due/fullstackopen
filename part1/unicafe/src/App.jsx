import { useState } from 'react'

const Button = ({handleClick, text}) => (<div><button onClick={handleClick}>{text}</button></div>)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const setGoodFeedback = () => { 
    setGood(good+1)
    setTotal(total+1)
    
  }
  const setNeutralFeedback = () => {
    setNeutral(neutral+1)
    setTotal(total+1)
  }
    const setBadFeedback = () => {
      setBad(bad+1)
      setTotal(total+1)
    }

    const calculateScore = () => total == 0 ? 0 : (good - bad) / total;

    const positivePercentage = () => total == 0 ? 0 : (good*100)/total

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{display:"flex"}}>
      <Button handleClick={setGoodFeedback} text="good"/>
      <Button handleClick={setNeutralFeedback} text="neutral"/>
      <Button handleClick={setBadFeedback} text="bad"/>
      </div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {calculateScore()}</p>
      <p>positive {positivePercentage()}%</p>
    </div>
  )
}

export default App