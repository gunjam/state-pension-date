const express = require('express');

const getStateRetirementDate = require('./src/get-state-pension-date/get-state-pension-date');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
	response.send('hello');
});

app.get('/:dob/:gender', (request, response) => {
	const dateOfBirth = request.params.dob;
	const gender = request.params.gender;
	const statePensionDate = getStateRetirementDate(dateOfBirth, gender);

	response.send(`Calculated pension date is: ${statePensionDate}`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
