import { useState } from "react"
import Result from "./Result"

const Results = ({ country, countries, handleButtonClick }) => {    
    if (country) {
        return <Result country={country} />
    }

    if (countries.length > 10){
        return <p>Too many matches, specify another filter</p>
    }

    return <>
        {countries.map(c => 
            <p key={c.name.common}>
                {c.name.common} &nbsp;
                <button onClick={() => handleButtonClick(c)}>show</button>
            </p>)}
    </>
}

export default Results