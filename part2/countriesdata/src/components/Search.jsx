const Search = ({handleInputChange, input}) => {
    return <>
    <form>
        <p>find countries &nbsp;
            <input 
                onChange={handleInputChange} 
                value={input}>
            </input>
        </p>
      </form>
    </>
}

export default Search