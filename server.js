const express = require('express');

const getStatePensionDateAsString = require('./src/get-state-pension-date').getStatePensionDateAsString;

const app = express();

const port = process.env.PORT || 5000;

// The only supported route is /dob/gender
// Example: http://localhost:5000/1960-05-10/F
app.get('/:dob/:gender', (request, response) => {
	const dateOfBirth = request.params.dob;
	const gender = request.params.gender;
	const statePensionDate = getStatePensionDateAsString(dateOfBirth, gender);

	response.send(`For a Date of birth of '${dateOfBirth}' and a Gender of '${gender}', the calculated pension date is: ${statePensionDate}`);
});

// Start listening
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
