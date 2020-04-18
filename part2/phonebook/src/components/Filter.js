import React from 'react';

const Filter = ({ filterStr, updateFilterCallback }) => {
	return (
		<>
			<h2>Filter entries</h2>
			<div>
				name:{' '}
				<input value={filterStr} onChange={updateFilterCallback} />
			</div>
		</>
	);
};

export default Filter;
