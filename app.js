
// Get logging framework installed ASAP
const bunyan = require('bunyan');

const log = bunyan.createLogger({
	name: 'spa',
	streams: [
		{
			level: 'info',
			path: './spa.log'  // log ERROR and above to a file
		}
	]
});

log.info('SPA Application started');

// UUID generator
const uuidV1 = require('uuid/v1');

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

	const logEntry = {
		txnId: uuidV1(),
		dateOfBirth,
		gender
	};

	log.info(`Data: ${JSON.stringify(logEntry)}`);

	response.send(`Calculated retirement date is: ${stateRetirementDate}`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
