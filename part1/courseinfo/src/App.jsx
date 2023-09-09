const Header = (props) => {
return (
  <>
  <h1>{props.course}</h1>
  </>
)
}

const Content = (props) => {
  return(
    <>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
     <p>number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = "half stack application development"
  const part1 = {
    name: "fundamentals of react",
    exercises: 10
  }
  const part2 = {
    name: "using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "state of a component",
    exercises: 14
  }
  return (
    <>
    <Header course={course}/>
    <Content 
      part1={part1} 
      part2={part2} 
      part3={part3} 
    />
    <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </>
  )
}

export default App
