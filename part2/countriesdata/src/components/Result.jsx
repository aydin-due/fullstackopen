const Result = ({ country }) => {
    const languages = Object.values(country.languages)
    return <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h2>languages</h2>
        {languages.map(l => <li key={l}>{l}</li>)}
        <img src={country.flags['png']}/>
    </>
}

export default Result