import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPersonObj = { name: newName };
    const newPersonsArray = persons.concat(newPersonObj);
    setPersons(newPersonsArray);
  };

  let debugPersons = [];
  for (let i = 0; i < persons.length; i++) {
    debugPersons.push(persons[i].name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
