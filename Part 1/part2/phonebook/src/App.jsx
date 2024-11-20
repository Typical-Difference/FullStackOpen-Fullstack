import { useState } from "react";

const App = () => {
  //persons is an array of objects with `name` field
  //newName is used to pass a new value from the form
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault(); //prevent default stops reload upon submitting for
    const personsString = persons.map((person) => person.name);
    if (personsString.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPersonObj = { name: newName };
      const newPersonsArray = persons.concat(newPersonObj);
      setPersons(newPersonsArray);
    }
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
        <div>debug:{newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        //Traverse the persons array and display its contents
        persons.map((person, index) => {
          return <p key={index}>{person.name}</p>;
        })
      }
    </div>
  );
};
export default App;
