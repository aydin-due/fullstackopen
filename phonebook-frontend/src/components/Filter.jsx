const Filter = ({handleFilterChange, filter}) => 
<p>filter shown with 
    <input onChange={handleFilterChange} value={filter}/>
</p>

export default Filter