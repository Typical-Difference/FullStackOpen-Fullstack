import { useState } from "react";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;

  if (all) {
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
