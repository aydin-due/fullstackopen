const Search = ({handleCountryChange, country}) => {
    return <>
    <form>
        <p>find countries &nbsp;
            <input 
                onChange={handleCountryChange} 
                value={country}>
            </input>
        </p>
      </form>
    </>
}

export default Search