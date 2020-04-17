import React from 'react';
const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => (
	<>
		{parts.map((part) => (
			<Part key={part.id} part={part.name} exercises={part.exercises} />
		))}
	</>
);

const Part = ({ part, exercises }) => (
	<p>
		{part} {exercises}
	</p>
);

const Total = ({ sum }) => <p>Number of exercises{' ' + sum}</p>;

const Course = ({ course }) => {
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total sum={course.parts.reduce((a, b) => a + b.exercises, 0)} />
		</>
	);
};

export default Course;
