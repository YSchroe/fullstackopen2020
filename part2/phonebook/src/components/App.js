import React, { useState } from 'react';
import InputForm from './InputForm';
import Filter from './Filter';
import Phonebook from './Phonebook';

const App = () => {
	// State vars definition
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' },
	]);
	const [newEntry, setNewEntry] = useState({ name: '', number: '' });
	const [filterStr, setFilterStr] = useState('');

	// callbacks
	// ... why keep them here and don't put them into the subcomponents?
	// Wouldn't it be cleaner to just pass the state vars and update-state methods
	// instead of the whole event handle methods?
	const submitEntry = (e) => {
		e.preventDefault();
		if (persons.map((a) => a.name).includes(newEntry.name)) {
			alert(`${newEntry.name} is already added!`);
		} else {
			setPersons(persons.concat(newEntry));
		}
	};

	const updateName = (e) => {
		setNewEntry({ ...newEntry, name: e.target.value });
	};

	const updateNumber = (e) => {
		setNewEntry({ ...newEntry, number: e.target.value });
	};

	const updateFilter = (e) => {
		setFilterStr(e.target.value);
	};

	return (
		<div>
			<h1>Phonebook</h1>
			<InputForm
				newEntry={newEntry}
				submitEntryCallback={submitEntry}
				updateNameCallback={updateName}
				updateNumberCallback={updateNumber}
			/>
			<Filter filterStr={filterStr} updateFilterCallback={updateFilter} />
			<Phonebook entries={persons} filter={filterStr} />
		</div>
	);
};

export default App;
