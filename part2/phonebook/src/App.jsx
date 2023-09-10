import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '1234567890' }
  ]) 
  const [newPerson, setNewPerson] = useState({name:'', phone:''})

  const handleNameChange = (event) => setNewPerson({...newPerson, name: event.target.value})
  const handlePhoneChange = (event) => setNewPerson({...newPerson, phone: event.target.value})

  const addPerson = (event) => {
    event.preventDefault()
    const alreadyExists = persons.some(person => person.name === newPerson.name)
    if (alreadyExists) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewPerson({name:'', phone:''})
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <p>name: <input onChange={handleNameChange} value={newPerson.name}/></p>
          <p>phone: <input onChange={handlePhoneChange} value={newPerson.phone}/></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.phone}</li>)}
      </ul>
    </div>
  )
}

export default App