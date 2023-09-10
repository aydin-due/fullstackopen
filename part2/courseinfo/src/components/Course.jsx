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
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    
    return (
       <p><strong>total of {total} exercises</strong></p>
    )
  }
    
export default Course