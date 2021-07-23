const Header = (props) => {
  return <h1>{props.course}</h1>
};

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  const courses = props.courses;
  return (
    <div>
      <Part name={courses.part1.name} exercises={courses.part1.exercises} />
      <Part name={courses.part2.name} exercises={courses.part2.exercises} />
      <Part name={courses.part3.name} exercises={courses.part3.exercises} />
    </div>
  )
};

const Total = (props) => {
  const total = Object.values(props.courses).map(part => {
    return part.exercises;
  }).reduce((acc, num) => acc + num);

  return <p>{total}</p>
};

const App = () => {
  const course = 'Half Stack applciation development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  const courses = {
    part1,
    part2,
    part3,
  }

  return (
    <div>
      <Header course={course} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
}

export default App;
