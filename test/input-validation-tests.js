const assert = require('assert');
const getStatePensionDate = require('../src/get-state-pension-date').getStatePensionDate;
const getStatePensionDateAsString = require('../src/get-state-pension-date').getStatePensionDateAsString;

describe('Parameter validation checks', () => {
	describe('Checking in/valid gender variations. So, getStatePensionDateAsString', () => {
		//
		// Ability to use 'male' & 'female' as gender values
		//
		// Verify we can supply 'female' insted of 'f' as a gender
		it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a gender of \'female\'', () => {
			assert.equal('2088-02-29', getStatePensionDateAsString('2020-02-29', 'female'));
		});

		// Verify we can supply 'male' insted of 'm' as a gender
		it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a gender of \'male\'', () => {
			assert.equal('2088-02-29', getStatePensionDateAsString('2020-02-29', 'male'));
		});

		// Verify we can supply 'FEMALE' insted of 'f' as a gender
		it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a gender of \'FEMALE\'', () => {
			assert.equal('2088-02-29', getStatePensionDateAsString('2020-02-29', 'FEMALE'));
		});

		// Verify we can supply 'FEMALE' insted of 'm' as a gender
		it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a gender of \'MALE\'', () => {
			assert.equal('2088-02-29', getStatePensionDateAsString('2020-02-29', 'MALE'));
		});

		// Verify we cannot supply 'FE' as a gender
		it('should return undefined when a DOB of 2020-02-29 is applied to a gender of \'FE\'', () => {
			assert.equal(undefined, getStatePensionDateAsString('2020-02-29', 'FE'));
		});

		// Verify we cannot supply 'MA' as a gender
		it('should return undefined when a DOB of 2020-02-29 is applied to a gender of \'MA\'', () => {
			assert.equal(undefined, getStatePensionDateAsString('2020-02-29', 'MA'));
		});
	});

	describe('Checking in/valid date variations. So, getStatePensionDate', () => {
		// Invalid year
		it('should return \'undefined\' when a DOB of 195-12-05 is supplied with \'M\'', () => {
			assert.equal(undefined, getStatePensionDate('195-12-05', 'M'));
		});

		it('should return \'undefined\' when a DOB of 19521205 is supplied with \'M\'', () => {
			assert.equal(undefined, getStatePensionDate('19521205', 'M'));
		});

		it('should return \'undefined\' when a DOB of 1952-12-05 is supplied with \'N\'', () => {
			assert.equal(undefined, getStatePensionDate('1952-12-05', 'N'));
		});

		it('should return \'undefined\' when a DOB of -- is supplied with \'F\'', () => {
			assert.equal(undefined, getStatePensionDate('--', 'F'));
		});

		it('should return \'undefined\' when a DOB of 1960/01/01 is supplied with \'F\'', () => {
			assert.equal(undefined, getStatePensionDate('1960/01/01', 'F'));
		});

		it('should return \'undefined\' when a DOB of 02-08-1999 is supplied with \'F\'', () => {
			assert.equal(undefined, getStatePensionDate('02-08-1999', 'F'));
		});

		it('should return \'undefined\' when a DOB of 1990-02-30 is supplied with \'M\'', () => {
			assert.equal(undefined, getStatePensionDate('1990-02-30', 'M'));
		});

		it('should return \'undefined\' when a DOB of 2017-02-29 is supplied with \'M\'', () => {
			assert.equal(undefined, getStatePensionDate('2017-02-29', 'M'));
		});

		// Without a gender, we can't be expected to match a rule
		it('should return \'undefined\' when a DOB of 1952-12-05 is supplied without gender', () => {
			assert.equal(undefined, getStatePensionDate('1952-12-05'));
		});

		// Without a gender, we can't be expected to match a rule
		it('should return \'undefined\' when a DOB of 1950-04-05 is supplied with \'\'', () => {
			assert.equal(undefined, getStatePensionDate('1952-12-05', ''));
		});
	});
});
