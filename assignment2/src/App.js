import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const state = {
    people: [
      { key: "22", name: "Tim", age: "42" },
      { key: "23", name: "Fred", age: "18" },
      { key: "24", name: "Eric", age: "63" },
      { key: "25", name: "James", age: "29" },
      { key: "27", name: "Bob", age: "84" }
    ]
  }

  return (
    <div className="App">
      {state.people.map(person =>
        <Person key={person.key} name={person.name} age={person.age} />
      )}
    </div>
  );
}

export default App;
