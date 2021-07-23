const Header = ({ course }) => {
  return <h2>{course.name}</h2>
};

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
};

const Total = ({ course }) => {
  const total = course.parts.map(part => {
    return part.exercises;
  }).reduce((acc, num) => acc + num);

  return <p>Total exercises {total}</p>
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course;