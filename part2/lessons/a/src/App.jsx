import Note from './components/Note'

const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note.content}/>
        )}
      </ul>
    </div>
  )
}

export default App