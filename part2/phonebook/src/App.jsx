import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'
import { useEffect } from 'react'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState({name:'', number:''})
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  let results = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = (event) => setNewPerson({...newPerson, name: event.target.value})
  const handlePhoneChange = (event) => setNewPerson({...newPerson, number: event.target.value})
  const handleFilterChange = (event) => setFilter(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.find(person => person.name === newPerson.name)
    if (found) {
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = {...found, number: newPerson.number}
        phonebookService.update(changedPerson)
        .then(person => {
          setPersons(persons.map(p => p.id !== person.id ? p : person))
          setNewPerson({name: '', number: ''})
          setMessage(`updated ${person.name}'s number`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
    } else {
      phonebookService.create(newPerson)
        .then(person => {
          setPersons(persons.concat(person))
          setNewPerson({name:'', number:''})
          setMessage(`added ${person.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }
console.log("init", message)
  useEffect(() => {
    phonebookService.getAll()
      .then(people => {setPersons(people)})
  }, [])

  const deletePerson = (id) => {
    const deletedPerson = persons.find(p => p.id == id)
      if (window.confirm(`are you sure you want to delete ${deletedPerson.name}?`)){
        phonebookService.deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(p => p.id !== id))
        }
        )
        .catch(error => {
          setError(`${deletedPerson.name} has already been removed`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
      }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Error error={error}/>
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
      <People people={results} deletePerson={deletePerson}/>
    </div>
  )
}

export default App