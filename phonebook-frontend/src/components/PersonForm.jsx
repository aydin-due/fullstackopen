const PersonForm = ({addPerson, handleNameChange, name, handlePhoneChange, number}) => 
    <form onSubmit={addPerson}>
        <div>
            <p>name: <input onChange={handleNameChange} value={name}/></p>
            <p>number: <input onChange={handlePhoneChange} value={number}/></p>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>

export default PersonForm