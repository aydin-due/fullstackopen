import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newPerson, setNewPerson] = useState({name:'', number:''})
  const [filter, setFilter] = useState('')
  console.log(filter.toLowerCase())
  let results = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = (event) => setNewPerson({...newPerson, name: event.target.value})
  const handlePhoneChange = (event) => setNewPerson({...newPerson, number: event.target.value})
  const handleFilterChange = (event) => setFilter(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const alreadyExists = persons.some(person => person.name === newPerson.name)
    if (alreadyExists) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewPerson({name:'', number:''})
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input onChange={handleFilterChange} value={filter}/></p>
      <h2>add new number</h2>
      <form onSubmit={addPerson}>
        <div>
          <p>name: <input onChange={handleNameChange} value={newPerson.name}/></p>
          <p>number: <input onChange={handlePhoneChange} value={newPerson.number}/></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {results.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App