import React from 'react';

const Entry = ({ name, number }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{number}</td>
		</tr>
	);
};

const Phonebook = ({ entries, filter }) => {
	return (
		<>
			<h1>Entries</h1>
			<table>
				<tbody>
					{entries
						.filter((entry) => {
							return filter !== ''
								? entry.name
										.toLowerCase()
										.includes(filter.toLowerCase())
								: true;
						})
						.map((entry) => (
							<Entry
								key={entry.name}
								name={entry.name}
								number={entry.number}
							/>
						))}
				</tbody>
			</table>
		</>
	);
};

export default Phonebook;
