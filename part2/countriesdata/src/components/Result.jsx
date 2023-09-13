import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Result = ({ country }) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        weatherService.getCapitalWeather(country.capital)
        .then(weather => setWeather(weather.current))
    }, [])

    console.log(weather)
    const languages = Object.values(country.languages)
    return <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h2>languages</h2>
        {languages.map(l => <li key={l}>{l}</li>)}
        <img src={country.flags['png']}/>
        <h2>weather in {country.capital}</h2>
        {weather && <>
            <p>temperature {weather.temp_c} Celsius</p>
            <img src={weather.condition.icon}/>
            <p>wind {weather.wind_kph} k/h</p>
        </>}
    </>
}

export default Result