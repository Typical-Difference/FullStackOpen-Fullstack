import { useState } from "react";

const Filter = ({ filterText, handleFilterText }) => {
  return (
    <div>
      Filter shown with a{" "}
      <input value={filterText} onChange={handleFilterText}></input>
    </div>
  );
};

const PersonForm = ({ persons, setPersons }) => {
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
    const personsNames = persons.map((person) => person.name.toLowerCase());

    //Check duplicates
    if (personsNames.includes(newName.toLowerCase())) {
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
    </div>
  );
};

const Persons = ({ persons }) => {
  //Traverse the persons array and display its contents
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

const Person = ({ person }) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  );
};

const App = () => {
  //persons is an array of objects with `name` and `number` fields
  //newName is used to pass a new value from the form
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filterText, setFilterText] = useState("");

  const handleFilterText = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };
  const filteredList = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterText);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilterText={handleFilterText} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={filteredList} />
    </div>
  );
};
export default App;
