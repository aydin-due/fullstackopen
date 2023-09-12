import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'
import { useEffect } from 'react'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState({name:'', number:''})
  const [filter, setFilter] = useState('')
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
      phonebookService.create(newPerson)
        .then(person => {
          setPersons(persons.concat(person))
          setNewPerson({name:'', number:''})
        })
    }
  }

  useEffect(() => {
    phonebookService.getAll()
      .then(people => {setPersons(people)})
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter}/>
      <h2>add new number</h2>
      <PersonForm 
        name={newPerson.name}
        number={newPerson.number}
        handleNameChange={handleNameChange} 
        handlePhoneChange= {handlePhoneChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <People people={results} />
    </div>
  )
}

export default App