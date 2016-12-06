const express = require('express');
const getStateRetirementDate = require('./src/get-state-retirement-date/get-state-retirement-date');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
	response.send('hello');
});

app.get('/:dob/:gender', (request, response) => {
	const dateOfBirth = request.params.dob;
	const gender = request.params.gender;
	const stateRetirementDate = getStateRetirementDate(dateOfBirth, gender);

	response.send(`Calculated retirement date is: ${stateRetirementDate}`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
