const People = ({people, deletePerson }) => 
    <ul>
        {people.map(person => 
            <li key={person.name}>
                {person.name}
                {person.number} 
                <button onClick={() => deletePerson(person.id)}>delete</button>
            </li>
        )}
    </ul>

export default People