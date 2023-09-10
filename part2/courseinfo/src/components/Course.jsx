const Course = ({course}) => (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    </>
)

const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part} />)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>
    
export default Course