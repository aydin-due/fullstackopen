const Course = ({course}) => (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
)

const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part} />)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
    let total = 0
    parts.map(part => total += part.exercises)
    
    return (
       <p><strong>total of {total} exercises</strong></p>
    )
  }
    
export default Course