const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}

      <Total parts={parts} />
    </div>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => {
  const sum = parts.reduce(function (sum, part) {
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <b>total of {sum} exercises</b>
    </div>
  );
};

export default Course;
