import { useState } from 'react'

const Button = ({handleClick, text}) => (<div><button onClick={handleClick}>{text}</button></div>)

const Statistics = ({good, neutral, bad, total}) => {
  if (total == 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>no feedback given</p>
      </div>
    )
  }

  const calculateScore = () => (good - bad) / total;

  const positivePercentage = () => (good*100)/total
  
  return (
    <div>
      <h2>statistics</h2>
      <StatisticsLine name="good" value={good}/>
      <StatisticsLine name="neutral" value={neutral}/>
      <StatisticsLine name="bad" value={bad}/>
      <StatisticsLine name="all" value={total}/>
      <StatisticsLine name="average" value={calculateScore()}/>
      <StatisticsLine name="positive" value={positivePercentage()}/>
    </div>
  )
}

const StatisticsLine = ({name, value}) => <p>{name} {value}</p>

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

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{display:"flex"}}>
      <Button handleClick={setGoodFeedback} text="good"/>
      <Button handleClick={setNeutralFeedback} text="neutral"/>
      <Button handleClick={setBadFeedback} text="bad"/>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

export default App