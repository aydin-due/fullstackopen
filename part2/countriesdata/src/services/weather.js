import axios from 'axios'

const baseUrl = 'http://api.weatherapi.com/v1/current.json'
const key = import.meta.env.VITE_KEY;

console.log(key)

const getCapitalWeather = capital => {
    const request = axios.get(`${baseUrl}?key=${key}&query=${capital}`)
    return request.then(response => response.data)
}

export default { getCapitalWeather }