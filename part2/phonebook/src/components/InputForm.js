import React from 'react';

const InputForm = ({
	newEntry,
	submitEntryCallback,
	updateNameCallback,
	updateNumberCallback,
}) =>
	// Why is the form used at all? Couldn't we just use a 'onClick' callback for
	// the button without the whole form encapsulation?
	{
		return (
			<>
				<h2>Add new entry</h2>
				<form onSubmit={submitEntryCallback}>
					<div>
						name:{' '}
						<input
							value={newEntry.name}
							onChange={updateNameCallback}
						/>
					</div>
					<div>
						number:
						<input
							value={newEntry.number}
							onChange={updateNumberCallback}
						/>
					</div>
					<div>
						<button type="submit">add</button>
					</div>
				</form>
			</>
		);
	};

export default InputForm;
