import { useState } from 'react'
import countriesService from './services/countries'
import { useEffect } from 'react'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [input, setInput] = useState('')
  const [country, setCountry] = useState()
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const handleInputChange = (event) => {
    setInput(event.target.value)
    setCountry()
  }

  const handleButtonClick = (country) => {
    setCountry(country)
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])
  
  useEffect(() => {
    if (input !== '') {
      const results = countries.filter(c => c.name.common.toLowerCase().includes(input.toLowerCase()))
      if (results.length === 1) {
        setCountry(results[0])
      } else {
        setFilteredCountries(results)
      }
    } else {
      setFilteredCountries([])
    }
  }, [input])

  return (
    <div>
      <Search 
        handleInputChange={handleInputChange} 
        input={input} 
      />
      <Results 
        countries={filteredCountries}  
        handleButtonClick={handleButtonClick}
        country={country}
      />
    </div>
     
  )
}

export default App