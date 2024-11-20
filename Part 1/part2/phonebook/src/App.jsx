import { useState } from "react";

const App = () => {
  //persons is an array of objects with `name` and `number` fields
  //newName is used to pass a new value from the form
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault(); //prevent default stops reload upon submitting for
    const personsNames = persons.map((person) => person.name);

    //Check duplicates
    if (personsNames.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    //Add name and number
    const newPersonObj = { name: newName, number: newNumber };
    const newPersonsArray = persons.concat(newPersonObj);
    setPersons(newPersonsArray);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}></input>
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
          return (
            <p key={index}>
              {person.name} {person.number}
            </p>
          );
        })
      }
    </div>
  );
};
export default App;
