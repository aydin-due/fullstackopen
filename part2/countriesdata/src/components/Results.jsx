import Result from "./Result"

const Results = ({ countries }) => {
    if (countries.length > 10){
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length == 1) {
       return <Result country={countries[0]} />
    }

    return <>
        {countries.map(c => <p key={c.name.common}>{c.name.common}</p>)}
    </>
}

export default Results