'use strict';
const pad = require('../utilities/pad');
const getStatePensionDate = require('./get-state-pension-date');

module.exports = function (dateOfBirth, gender) {
	let result;
	const statePensionDate = getStatePensionDate(dateOfBirth, gender);

	if (statePensionDate !== undefined) {
		result = `${statePensionDate.getFullYear()}-${pad(statePensionDate.getMonth() + 1, '0', 2)}-${pad(statePensionDate.getDate(), '0', 2)}`;
	}

	return result;
};
