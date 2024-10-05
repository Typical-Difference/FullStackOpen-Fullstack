import { useState } from "react";

const Header = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setClicks] = useState([]);

  const leftClick = () => {
    setClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const rightClick = () => {
    setClicks(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={leftClick}>Left</button>
      {right}
      <button onClick={rightClick}>Right</button>
      <p>Total:</p>
      {allClicks}
    </div>
  );
};

const App = () => {
  return <Header />;
};

/*
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  // const-definitions
  const [counter, setCounter] = useState(0);

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Display counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>REEEEEEEEEEE</button>{" "}
      <br /> <br />
      <button onClick={() => setCounter(0)}>Reset</button>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
*/
export default App;
