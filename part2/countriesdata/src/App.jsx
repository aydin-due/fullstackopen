import { useState } from 'react'
import countriesService from './services/countries'
import { useEffect } from 'react'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const handleCountryChange = (event) => setCountry(event.target.value)

  useEffect(() => {
    countriesService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])
  
  useEffect(() => {
    if (country !== '') {
      setFilteredCountries(countries.filter(c => c.name.common.toLowerCase().includes(country.toLowerCase())))
    } else {
      setFilteredCountries([])
    }
  }, [country])

  return (
    <div>
      <Search handleCountryChange={handleCountryChange} country={country} />
      <Results countries={filteredCountries} />
    </div>
     
  )
}

export default App