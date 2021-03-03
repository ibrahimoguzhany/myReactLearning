import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Oguz", age: 23 },
      { name: "Ceren", age: 245 },
      { name: "Ceren2", age: 24 },
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value",
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('was clicked');
    setPersonsState({
      persons: [
        { name: "Oguz", age: 23 },
        { name: "Ceren", age: 35 },
        { name: "Ceren2", age: 234 },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hi I'm ibos.</h1>
      <p>this is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>

      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing{" "}
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  //return React.createElement('div', {className:'App'}, 'h1', React.createElement('h1',null,'Does this work now?'));
};

export default app;
