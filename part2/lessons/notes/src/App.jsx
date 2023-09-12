import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService.getAll()
      .then(notes => {
        setNotes(notes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const note = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    noteService.create(note).then(
      note => {
        setNotes(notes.concat(note))
        setNewNote('')
      }
    )
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportance = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.update(id, changedNote).then(
      note => {
        setNotes(notes.map(n => n.id !== id ? n : note))
      }
    ).catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const showedNotes =showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>{showAll ? 'important' : 'all'}</button>
      <ul>
        {showedNotes.map(note => 
          <Note 
            key={note.id} 
            note={note} 
            toggleImportance={() => toggleImportance(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App