'use strict';
const statePensionAgeData = require('./spa-data');

/*
* Function to calculate UK State Pension age/date for a given 'Gender' and
* 'Date of birth'.
*
* Returns 'undefined' if unable to calculate the date, otherwise it returns the
*         retirement date in the format YYYY-MM-DD
*/
const getStatePensionDate = function (dateOfBirth, gender) {
	const dateOfBirthDate = new Date(dateOfBirth);
	let statePensionDate;
	let result;

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
                // Everything checks out, so set result to 'matched'
				matched = true;
			}
		}

		return matched;
	});

	// If we find a match for our date of birth, then use the matching rule to
	// work out the retirement date
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
				// that does not have a 31st, are moved 'backwards' to the 30th.
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
* Utility function to pad a value with leading characters
*/
function pad(value, padCharacter, requiredLength) {
	let valueString = value.toString();

	while (valueString.length < requiredLength) {
		valueString = padCharacter + valueString;
	}

	return valueString;
}

module.exports = getStatePensionDate;
