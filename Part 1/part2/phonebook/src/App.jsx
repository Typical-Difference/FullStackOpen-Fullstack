import { useState } from "react";

const App = () => {
  //persons is an array of objects with `name` and `number` fields
  //newName is used to pass a new value from the form
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  //States to handle input
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterText = (event) => {
    setFilterText(event.target.value);
  };

  const filteredList = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterText);
  });

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
      <div>
        Filter shown with a{" "}
        <input value={filterText} onChange={handleFilterText}></input>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        //Traverse the persons array and display its contents
        filteredList.map((item) => {
          return (
            <p key={item.id}>
              {item.name} {item.number}
            </p>
          );
        })
      }
    </div>
  );
};
export default App;
