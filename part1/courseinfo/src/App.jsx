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
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
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
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <>
     <p>number of exercises {total}</p>
    </>
  )
}

const App = () => {
  const course = "half stack application development"
  const parts = [
    {
      name: "fundamentals of react",
      exercises: 10
    },
    {
      name: "using props to pass data",
      exercises: 7
    },
    {
      name: "state of a component",
      exercises: 14
    }
  ]
  return (
    <>
    <Header course={course}/>
    <Content parts={parts} />
    <Total parts={parts}/>
    </>
  )
}

export default App
