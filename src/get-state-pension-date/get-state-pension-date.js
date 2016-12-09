'use strict';
const statePensionAgeData = require('./spa-data');

/*
* Function to calculate UK State Pension age/date for a given 'Gender' and
* 'Date of birth'.
*
* Returns: 'undefined' if unable to calculate the date, otherwise it returns the
*          state pension date as a string in the format YYYY-MM-DD
*/
const getStatePensionDate = function (dateOfBirth, gender) {
	let result;

	// Don't bother going any further if the input params are not valid
	if (validateInputs(dateOfBirth, gender) === false) {
		return result;
	}

	const dateOfBirthDate = new Date(dateOfBirth);
	let statePensionDate;

	// See if we can find a rule in our dataset that matches our DOB & gender
	const ageData = statePensionAgeData.find(currentElement => {
		let matched = false;

		// If rule gender is '' (applies to any gender), or matches the supplied
		// gender...
		if (currentElement.gender === '' || (currentElement.gender.toUpperCase() === gender.toUpperCase())) {
			// ...then check the date of birth is within the range of this rule
			const periodStartDate = new Date(currentElement.periodStart);
			const periodEndDate = new Date(currentElement.periodEnd);

			if ((currentElement.periodStart === '' || (dateOfBirthDate.getTime() >= periodStartDate.getTime())) &&
				(currentElement.periodEnd === '' || (dateOfBirthDate.getTime() <= periodEndDate.getTime()))) {
				// Everything checks out, so we found a match
				matched = true;
			}
		}

		return matched;
	});

	// If we found a match for our date of birth/gender, then use that matching
	// rule to work out the retirement date
	if (ageData !== undefined) {
		switch (ageData.pensionDate.type) {
			case 'fixed': {
				statePensionDate = new Date(ageData.pensionDate.value);
				break;
			}

			case 'age': {
				statePensionDate = new Date(dateOfBirthDate);
				statePensionDate.setFullYear(dateOfBirthDate.getFullYear() + ageData.pensionDate.years);
				statePensionDate.setMonth(dateOfBirthDate.getMonth() + ageData.pensionDate.months);

				// If the DOB is a 'leap day' (29 feb), then if the date of
				// retirement falls in a non-leap year (no 29 feb), we have to
				// move the retirement date 'forwards' to 01 March.
				// However, the 'Pensions act 2014' requires people born on the
				// 31st of a month, who find themselves with a retirement month
				// that does not have a 31st, to be moved 'backwards' to the 30th.
				if (dateOfBirthDate.getDate() !== statePensionDate.getDate()) {
					// So if DOB was a 29 feb, we move them forwards
					if (dateOfBirthDate.getDate() === 29 && dateOfBirthDate.getMonth() === 1) {
						statePensionDate.setMonth(statePensionDate.getMonth() + 1);
					} else {
						// Else, we move them backwards
						statePensionDate.setDate(statePensionDate.getDate() - 1);
					}
				}

				break;
			}

			default: {
				statePensionDate = undefined;
			}
		}

		// As long as we found a rule, set the result to the retirement date in
		// the required format
		if (statePensionDate !== undefined) {
			result = `${statePensionDate.getFullYear()}-${pad(statePensionDate.getMonth() + 1, '0', 2)}-${pad(statePensionDate.getDate(), '0', 2)}`;
		}
	}

	// Return the result
	return result;
};

/*
* Function to verify we have valid input data
*/
function validateInputs(dateOfBirth, gender) {
	let result = true;

	result = isValidYYYYMMDDDate(dateOfBirth);

	// We only support gender of 'M', 'F' & ''
	if (typeof gender === 'string') {
		if ((gender.toUpperCase() !== 'M') &&
            (gender.toUpperCase() !== 'F') &&
			(gender !== '')) {
			result = false;
		}
	} else {
		result = false;
	}

	return result;
} // End function validateInputs()

/*
* Utility function to validate a date is both in the correct (YYYY-MM-DD) format,
* and is a valid date.
*/
function isValidYYYYMMDDDate(dateString) {
	const dateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;
	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	// we assume fail unless proven otherwise
	let result = false;

	if (dateRegex.test(dateString)) {
		// Split the date into relevant parts and cast into numbers
		const dateElements = dateString.split('-');
		const year = parseInt(dateElements[0], 10);
		const month = parseInt(dateElements[1], 10);
		const day = parseInt(dateElements[2], 10);

		// If the year is within a sensible range...
		if (year >= 1000 && year <= 4000) {
			// ...and the month is a valid value...
			if (month >= 1 && month <= 12) {
				// ...and the day is within the range for the supplied year/month

				// Adjust Febrary to allow 29 days in leap years...
				if ((year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0))) {
					daysInMonth[1] = 29;
				}

				// ...then check day is in range for supplied month
				if (day > 0 && day <= daysInMonth[month - 1]) {
					// We get this far, then the date is valid
					result = true;
				}
			}
		}
	}

	return result;
} // End function isValidYYYYMMDDDate()

/*
* Utility function to pad a value with leading characters
*/
function pad(value, padCharacter, requiredLength) {
	let valueString = value.toString();

	while (valueString.length < requiredLength) {
		valueString = padCharacter + valueString;
	}

	return valueString;
} // End function pad()

module.exports = getStatePensionDate;
