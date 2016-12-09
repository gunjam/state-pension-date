const assert = require('assert');
const getStateRetirementDate = require('../src/get-state-pension-date/get-state-pension-date');

// TODO(GK): write tests for invalid/missing date or gender

describe('getStateRetirementDate', () => {
	// Men before 6 Dec 1953 retire at 65
	it('should return 2018-12-05 when a DOB of 1953-12-05 is applied to a Male', () => {
		assert.equal('2018-12-05', getStateRetirementDate('1953-12-05', 'M'));
	});

	// Men born on a leap day before 6 Dec 1953
	it('should return 2017-03-01 when a DOB of 1952-02-29 is applied to a Male', () => {
		assert.equal('2017-03-01', getStateRetirementDate('1952-02-29', 'M'));
	});

	// Women born before 6 Apr 1950 Retire at 60
	it('should return 2010-04-05 when a DOB of 1950-04-05 is applied to a Female', () => {
		assert.equal('2010-04-05', getStateRetirementDate('1950-04-05', 'F'));
	});

	//
	// Pensions act 1995
	//
	it('should return 2010-05-06 when a DOB of 1950-04-06 is applied to a Female', () => {
		assert.equal('2010-05-06', getStateRetirementDate('1950-04-06', 'F'));
	});

	it('should return 2010-05-06 when a DOB of 1950-05-05 is applied to a Female', () => {
		assert.equal('2010-05-06', getStateRetirementDate('1950-05-05', 'F'));
	});

	it('should NOT return 2010-05-06 when a DOB of 1950-05-05 is applied to a Male', () => {
		assert.notEqual('2010-05-06', getStateRetirementDate('1950-05-05', 'M'));
	});

	it('should return 2010-07-06 when a DOB of 1950-05-06 is applied to a Female', () => {
		assert.equal('2010-07-06', getStateRetirementDate('1950-05-06', 'F'));
	});

	it('should return 2010-07-06 when a DOB of 1950-06-05 is applied to a Female', () => {
		assert.equal('2010-07-06', getStateRetirementDate('1950-06-05', 'F'));
	});

	it('should NOT return 2010-07-06 when a DOB of 1950-07-05 is applied to a Male', () => {
		assert.notEqual('2010-07-06', getStateRetirementDate('1950-06-05', 'M'));
	});

	it('should return 2010-09-06 when a DOB of 1950-06-06 is applied to a Female', () => {
		assert.equal('2010-09-06', getStateRetirementDate('1950-06-06', 'F'));
	});

	it('should return 2010-09-06 when a DOB of 1950-07-05 is applied to a Female', () => {
		assert.equal('2010-09-06', getStateRetirementDate('1950-07-05', 'F'));
	});

	it('should NOT return 2010-09-06 when a DOB of 1950-07-05 is applied to a Male', () => {
		assert.notEqual('2010-09-06', getStateRetirementDate('1950-07-05', 'M'));
	});

	it('should return 2010-01-06 when a DOB of 1950-07-06 is applied to a Female', () => {
		assert.equal('2010-11-06', getStateRetirementDate('1950-07-06', 'F'));
	});

	it('should return 2010-11-06 when a DOB of 1950-08-05 is applied to a Female', () => {
		assert.equal('2010-11-06', getStateRetirementDate('1950-08-05', 'F'));
	});

	it('should NOT return 2010-09-06 when a DOB of 1950-07-05 is applied to a Male', () => {
		assert.notEqual('2010-11-06', getStateRetirementDate('1950-08-05', 'M'));
	});

	it('should return 2011-01-06 when a DOB of 1950-08-06 is applied to a Female', () => {
		assert.equal('2011-01-06', getStateRetirementDate('1950-08-06', 'F'));
	});

	it('should return 2011-01-06 when a DOB of 1950-09-05 is applied to a Female', () => {
		assert.equal('2011-01-06', getStateRetirementDate('1950-09-05', 'F'));
	});

	it('should NOT return 2011-01-06 when a DOB of 1950-09-05 is applied to a Male', () => {
		assert.notEqual('2011-01-06', getStateRetirementDate('1950-09-05', 'M'));
	});

	// TODO(GK): Finish Pensions act 1995

	//
	// Pensions act 2011
	//
	it('should return 2016-07-06 when a DOB of 1953-04-06 is applied to a Female', () => {
		assert.equal('2016-07-06', getStateRetirementDate('1953-04-06', 'F'));
	});

	it('should return 2016-07-06 when a DOB of 1953-05-05 is applied to a Female', () => {
		assert.equal('2016-07-06', getStateRetirementDate('1953-05-05', 'F'));
	});

	it('should NOT return 2016-07-06 when a DOB of 1953-05-05 is applied to a Male', () => {
		assert.notEqual('2016-07-06', getStateRetirementDate('1953-05-05', 'M'));
	});

	it('should return 2016-11-06 when a DOB of 1953-05-06 is applied to a Female', () => {
		assert.equal('2016-11-06', getStateRetirementDate('1953-05-06', 'F'));
	});

	it('should return 2016-11-06 when a DOB of 1953-06-05 is applied to a Female', () => {
		assert.equal('2016-11-06', getStateRetirementDate('1953-06-05', 'F'));
	});

	it('should NOT return 2016-11-06 when a DOB of 1953-06-05 is applied to a Male', () => {
		assert.notEqual('2016-11-06', getStateRetirementDate('1953-06-05', 'M'));
	});

	it('should return 2017-03-06 when a DOB of 1953-06-06 is applied to a Female', () => {
		assert.equal('2017-03-06', getStateRetirementDate('1953-06-06', 'F'));
	});

	it('should return 2017-03-06 when a DOB of 1953-07-05 is applied to a Female', () => {
		assert.equal('2017-03-06', getStateRetirementDate('1953-07-05', 'F'));
	});

	it('should NOT return 2017-03-06 when a DOB of 1953-07-05 is applied to a Male', () => {
		assert.notEqual('2017-03-06', getStateRetirementDate('1953-07-05', 'M'));
	});

	it('should return 2017-07-06 when a DOB of 1953-07-06 is applied to a Female', () => {
		assert.equal('2017-07-06', getStateRetirementDate('1953-07-06', 'F'));
	});

	it('should return 2017-07-06 when a DOB of 1953-08-05 is applied to a Female', () => {
		assert.equal('2017-07-06', getStateRetirementDate('1953-08-05', 'F'));
	});

	it('should NOT return 2017-07-06 when a DOB of 1953-08-05 is applied to a Male', () => {
		assert.notEqual('2017-07-06', getStateRetirementDate('1953-08-05', 'M'));
	});

	it('should return 2017-11-06 when a DOB of 1953-08-06 is applied to a Female', () => {
		assert.equal('2017-11-06', getStateRetirementDate('1953-08-06', 'F'));
	});

	it('should return 2017-11-06 when a DOB of 1953-09-05 is applied to a Female', () => {
		assert.equal('2017-11-06', getStateRetirementDate('1953-09-05', 'F'));
	});

	it('should NOT return 2017-11-06 when a DOB of 1953-09-05 is applied to a Male', () => {
		assert.notEqual('2017-11-06', getStateRetirementDate('1953-09-05', 'M'));
	});

	it('should return 2018-03-06 when a DOB of 1953-09-06 is applied to a Female', () => {
		assert.equal('2018-03-06', getStateRetirementDate('1953-09-06', 'F'));
	});

	it('should return 2018-03-06 when a DOB of 1953-10-05 is applied to a Female', () => {
		assert.equal('2018-03-06', getStateRetirementDate('1953-10-05', 'F'));
	});

	it('should NOT return 2018-03-06 when a DOB of 1953-10-05 is applied to a Male', () => {
		assert.notEqual('2018-03-06', getStateRetirementDate('1953-10-05', 'M'));
	});

	it('should return 2018-07-06 when a DOB of 1953-10-06 is applied to a Female', () => {
		assert.equal('2018-07-06', getStateRetirementDate('1953-10-06', 'F'));
	});

	it('should return 2018-07-06 when a DOB of 1953-11-05 is applied to a Female', () => {
		assert.equal('2018-07-06', getStateRetirementDate('1953-11-05', 'F'));
	});

	it('should NOT return 2018-07-06 when a DOB of 1953-11-05 is applied to a Male', () => {
		assert.notEqual('2018-07-06', getStateRetirementDate('1953-11-05', 'M'));
	});

	it('should return 2018-11-06 when a DOB of 1953-11-06 is applied to a Female', () => {
		assert.equal('2018-11-06', getStateRetirementDate('1953-11-06', 'F'));
	});

	it('should return 2018-11-06 when a DOB of 1953-12-05 is applied to a Female', () => {
		assert.equal('2018-11-06', getStateRetirementDate('1953-12-05', 'F'));
	});

	it('should NOT return 2018-11-06 when a DOB of 1953-12-05 is applied to a Male', () => {
		assert.notEqual('2018-11-06', getStateRetirementDate('1953-12-05', 'M'));
	});

	// Men & Women between 6 Dec 1953 - 5 Jan 1954
	it('should return 2019-03-06 when a DOB of 1953-12-06 is applied to a Female', () => {
		assert.equal('2019-03-06', getStateRetirementDate('1953-12-06', 'F'));
	});

	it('should return 2019-03-06 when a DOB of 1953-12-06 is applied to a Male', () => {
		assert.equal('2019-03-06', getStateRetirementDate('1953-12-06', 'M'));
	});

	it('should return 2019-03-06 when a DOB of 1954-01-05 is applied to a Female', () => {
		assert.equal('2019-03-06', getStateRetirementDate('1954-01-05', 'F'));
	});

	it('should return 2019-03-06 when a DOB of 1954-01-05 is applied to a Male', () => {
		assert.equal('2019-03-06', getStateRetirementDate('1954-01-05', 'M'));
	});

	// Men & Women between 6 Jan 1954 - 5 Feb 1954
	it('should return 2019-05-06 when a DOB of 1954-01-06 is applied to a Female', () => {
		assert.equal('2019-05-06', getStateRetirementDate('1954-01-06', 'F'));
	});

	it('should return 2019-05-06 when a DOB of 1954-01-06 is applied to a Male', () => {
		assert.equal('2019-05-06', getStateRetirementDate('1954-01-06', 'M'));
	});

	it('should return 2019-05-06 when a DOB of 1954-01-05 is applied to a Female', () => {
		assert.equal('2019-05-06', getStateRetirementDate('1954-02-05', 'F'));
	});

	it('should return 2019-05-06 when a DOB of 1954-01-05 is applied to a Male', () => {
		assert.equal('2019-05-06', getStateRetirementDate('1954-02-05', 'M'));
	});

	// Men & Women between 6 Feb 1954 - 5 Mar 1954
	it('should return 2019-07-06 when a DOB of 1954-02-06 is applied to a Female', () => {
		assert.equal('2019-07-06', getStateRetirementDate('1954-02-06', 'F'));
	});

	it('should return 2019-07-06 when a DOB of 1954-02-06 is applied to a Male', () => {
		assert.equal('2019-07-06', getStateRetirementDate('1954-02-06', 'M'));
	});

	it('should return 2019-07-06 when a DOB of 1954-03-05 is applied to a Female', () => {
		assert.equal('2019-07-06', getStateRetirementDate('1954-03-05', 'F'));
	});

	it('should return 2019-07-06 when a DOB of 1954-03-05 is applied to a Male', () => {
		assert.equal('2019-07-06', getStateRetirementDate('1954-03-05', 'M'));
	});

	// Men & Women between 6 Mar 1954 - 5 Apr 1954
	it('should return 2019-09-06 when a DOB of 1954-03-06 is applied to a Female', () => {
		assert.equal('2019-09-06', getStateRetirementDate('1954-03-06', 'F'));
	});

	it('should return 2019-09-06 when a DOB of 1954-03-06 is applied to a Male', () => {
		assert.equal('2019-09-06', getStateRetirementDate('1954-03-06', 'M'));
	});

	it('should return 2019-09-06 when a DOB of 1954-04-05 is applied to a Female', () => {
		assert.equal('2019-09-06', getStateRetirementDate('1954-04-05', 'F'));
	});

	it('should return 2019-09-06 when a DOB of 1954-04-05 is applied to a Male', () => {
		assert.equal('2019-09-06', getStateRetirementDate('1954-04-05', 'M'));
	});

	// Men & Women between 6 Apr 1954 - 5 May 1954
	it('should return 2019-11-06 when a DOB of 1954-04-06 is applied to a Female', () => {
		assert.equal('2019-11-06', getStateRetirementDate('1954-04-06', 'F'));
	});

	it('should return 2019-11-06 when a DOB of 1954-04-06 is applied to a Male', () => {
		assert.equal('2019-11-06', getStateRetirementDate('1954-04-06', 'M'));
	});

	it('should return 2019-11-06 when a DOB of 1954-05-05 is applied to a Female', () => {
		assert.equal('2019-11-06', getStateRetirementDate('1954-05-05', 'F'));
	});

	it('should return 2019-11-06 when a DOB of 1954-05-05 is applied to a Male', () => {
		assert.equal('2019-11-06', getStateRetirementDate('1954-05-05', 'M'));
	});

	// Men & Women between 6 May 1954 - 5 Jun 1954
	it('should return 2020-01-06 when a DOB of 1954-05-06 is applied to a Female', () => {
		assert.equal('2020-01-06', getStateRetirementDate('1954-05-06', 'F'));
	});

	it('should return 2020-01-06 when a DOB of 1954-04-06 is applied to a Male', () => {
		assert.equal('2020-01-06', getStateRetirementDate('1954-05-06', 'M'));
	});

	it('should return 2020-01-06 when a DOB of 1954-06-05 is applied to a Female', () => {
		assert.equal('2020-01-06', getStateRetirementDate('1954-06-05', 'F'));
	});

	it('should return 2020-01-06 when a DOB of 1954-06-05 is applied to a Male', () => {
		assert.equal('2020-01-06', getStateRetirementDate('1954-06-05', 'M'));
	});

	// Men & Women between 6 Jun 1954 - 5 Jul 1954
	it('should return 2020-03-06 when a DOB of 1954-06-06 is applied to a Female', () => {
		assert.equal('2020-03-06', getStateRetirementDate('1954-06-06', 'F'));
	});

	it('should return 2020-03-06 when a DOB of 1954-06-06 is applied to a Male', () => {
		assert.equal('2020-03-06', getStateRetirementDate('1954-06-06', 'M'));
	});

	it('should return 2020-03-06 when a DOB of 1954-07-05 is applied to a Female', () => {
		assert.equal('2020-03-06', getStateRetirementDate('1954-07-05', 'F'));
	});

	it('should return 2020-03-06 when a DOB of 1954-07-05 is applied to a Male', () => {
		assert.equal('2020-03-06', getStateRetirementDate('1954-07-05', 'M'));
	});

	// Men & Women between 6 Jul 1954 - 5 Aug 1954
	it('should return 2020-05-06 when a DOB of 1954-07-06 is applied to a Female', () => {
		assert.equal('2020-05-06', getStateRetirementDate('1954-07-06', 'F'));
	});

	it('should return 2020-05-06 when a DOB of 1954-07-06 is applied to a Male', () => {
		assert.equal('2020-05-06', getStateRetirementDate('1954-07-06', 'M'));
	});

	it('should return 2020-05-06 when a DOB of 1954-08-05 is applied to a Female', () => {
		assert.equal('2020-05-06', getStateRetirementDate('1954-08-05', 'F'));
	});

	it('should return 2020-05-06 when a DOB of 1954-08-05 is applied to a Male', () => {
		assert.equal('2020-05-06', getStateRetirementDate('1954-08-05', 'M'));
	});

	// Men & Women between 6 Aug 1954 - 5 Sep 1954
	it('should return 2020-07-06 when a DOB of 1954-08-06 is applied to a Female', () => {
		assert.equal('2020-07-06', getStateRetirementDate('1954-08-06', 'F'));
	});

	it('should return 2020-07-06 when a DOB of 1954-08-06 is applied to a Male', () => {
		assert.equal('2020-07-06', getStateRetirementDate('1954-08-06', 'M'));
	});

	it('should return 2020-07-06 when a DOB of 1954-09-05 is applied to a Female', () => {
		assert.equal('2020-07-06', getStateRetirementDate('1954-09-05', 'F'));
	});

	it('should return 2020-07-06 when a DOB of 1954-09-05 is applied to a Male', () => {
		assert.equal('2020-07-06', getStateRetirementDate('1954-09-05', 'M'));
	});

	// Men & Women between 6 Sep 1954 - 5 Oct 1954
	it('should return 2020-09-06 when a DOB of 1954-09-06 is applied to a Female', () => {
		assert.equal('2020-09-06', getStateRetirementDate('1954-09-06', 'F'));
	});

	it('should return 2020-09-06 when a DOB of 1954-09-06 is applied to a Male', () => {
		assert.equal('2020-09-06', getStateRetirementDate('1954-09-06', 'M'));
	});

	it('should return 2020-09-06 when a DOB of 1954-10-05 is applied to a Female', () => {
		assert.equal('2020-09-06', getStateRetirementDate('1954-10-05', 'F'));
	});

	it('should return 2020-09-06 when a DOB of 1954-10-05 is applied to a Male', () => {
		assert.equal('2020-09-06', getStateRetirementDate('1954-10-05', 'M'));
	});

	// Men & Women between 6 Oct 1954 - 5 Apr 1960
	it('should return 2020-10-06 when a DOB of 1954-10-06 is applied to a Female', () => {
		assert.equal('2020-10-06', getStateRetirementDate('1954-10-06', 'F'));
	});

	it('should return 2020-10-06 when a DOB of 1954-10-06 is applied to a Male', () => {
		assert.equal('2020-10-06', getStateRetirementDate('1954-10-06', 'M'));
	});

	it('should return 2026-04-05 when a DOB of 1960-04-05 is applied to a Female', () => {
		assert.equal('2026-04-05', getStateRetirementDate('1960-04-05', 'F'));
	});

	it('should return 2026-04-05 when a DOB of 1960-04-05 is applied to a Male', () => {
		assert.equal('2026-04-05', getStateRetirementDate('1960-04-05', 'M'));
	});

	// Leap day 29 Feb 1956
	it('should return 2022-03-01 when a DOB of 1956-02-29 is applied to a Female', () => {
		assert.equal('2022-03-01', getStateRetirementDate('1956-02-29', 'F'));
	});

	it('should return 2022-03-01 when a DOB of 1956-02-29 is applied to a Male', () => {
		assert.equal('2022-03-01', getStateRetirementDate('1956-02-29', 'M'));
	});

	//
	// Pensions act 2014
	//
	// Men & Women between 6 Apr 1960 - 5 May 1960
	it('should return 2026-05-06 when a DOB of 1960-04-06 is applied to a Female', () => {
		assert.equal('2026-05-06', getStateRetirementDate('1960-04-06', 'F'));
	});

	it('should return 2026-05-06 when a DOB of 1960-04-06 is applied to a Male', () => {
		assert.equal('2026-05-06', getStateRetirementDate('1960-04-06', 'M'));
	});

	it('should return 2026-06-05 when a DOB of 1960-05-05 is applied to a Female', () => {
		assert.equal('2026-06-05', getStateRetirementDate('1960-05-05', 'F'));
	});

	it('should return 2026-06-56 when a DOB of 1960-05-05 is applied to a Male', () => {
		assert.equal('2026-06-05', getStateRetirementDate('1960-05-05', 'M'));
	});

	// Men & Women between 6 May 1960 - 5 Jun 1960
	it('should return 2026-07-06 when a DOB of 1960-05-06 is applied to a Female', () => {
		assert.equal('2026-07-06', getStateRetirementDate('1960-05-06', 'F'));
	});

	it('should return 2026-07-06 when a DOB of 1960-05-06 is applied to a Male', () => {
		assert.equal('2026-07-06', getStateRetirementDate('1960-05-06', 'M'));
	});

	it('should return 2026-08-05 when a DOB of 1960-06-05 is applied to a Female', () => {
		assert.equal('2026-08-05', getStateRetirementDate('1960-06-05', 'F'));
	});

	it('should return 2026-08-05 when a DOB of 1960-06-05 is applied to a Male', () => {
		assert.equal('2026-08-05', getStateRetirementDate('1960-06-05', 'M'));
	});

	// Men & Women between 6 Jun 1960 - 5 Jul 1960
	it('should return 2026-09-06 when a DOB of 1960-06-06 is applied to a Female', () => {
		assert.equal('2026-09-06', getStateRetirementDate('1960-06-06', 'F'));
	});

	it('should return 2026-09-06 when a DOB of 1960-06-06 is applied to a Male', () => {
		assert.equal('2026-09-06', getStateRetirementDate('1960-06-06', 'M'));
	});

	it('should return 2026-10-05 when a DOB of 1960-07-05 is applied to a Female', () => {
		assert.equal('2026-10-05', getStateRetirementDate('1960-07-05', 'F'));
	});

	it('should return 2026-10-05 when a DOB of 1960-07-05 is applied to a Male', () => {
		assert.equal('2026-10-05', getStateRetirementDate('1960-07-05', 'M'));
	});

	// Men & Women between 6 Jul 1960 - 5 Aug 1960
	it('should return 2026-11-06 when a DOB of 1960-07-06 is applied to a Female', () => {
		assert.equal('2026-11-06', getStateRetirementDate('1960-07-06', 'F'));
	});

	it('should return 2026-11-06 when a DOB of 1960-07-06 is applied to a Male', () => {
		assert.equal('2026-11-06', getStateRetirementDate('1960-07-06', 'M'));
	});

	it('should return 2026-11-30 when a DOB of 1960-07-31 is applied to a Female', () => {
		assert.equal('2026-11-30', getStateRetirementDate('1960-07-31', 'F'));
	});

	it('should return 2026-11-30 when a DOB of 1960-07-31 is applied to a Male', () => {
		assert.equal('2026-11-30', getStateRetirementDate('1960-07-31', 'M'));
	});

	it('should return 2026-12-05 when a DOB of 1960-08-05 is applied to a Female', () => {
		assert.equal('2026-12-05', getStateRetirementDate('1960-08-05', 'F'));
	});

	it('should return 2026-12-05 when a DOB of 1960-08-05 is applied to a Male', () => {
		assert.equal('2026-12-05', getStateRetirementDate('1960-08-05', 'M'));
	});

	// Men & Women between 6 Aug 1960 - 5 Sep 1960
	it('should return 2027-01-06 when a DOB of 1960-08-06 is applied to a Female', () => {
		assert.equal('2027-01-06', getStateRetirementDate('1960-08-06', 'F'));
	});

	it('should return 2027-01-06 when a DOB of 1960-08-06 is applied to a Male', () => {
		assert.equal('2027-01-06', getStateRetirementDate('1960-08-06', 'M'));
	});

	it('should return 2027-02-05 when a DOB of 1960-09-05 is applied to a Female', () => {
		assert.equal('2027-02-05', getStateRetirementDate('1960-09-05', 'F'));
	});

	it('should return 2027-02-05 when a DOB of 1960-09-05 is applied to a Male', () => {
		assert.equal('2027-02-05', getStateRetirementDate('1960-09-05', 'M'));
	});

	// Men & Women between 6 Sep 1960 - 5 Oct 1960
	it('should return 2027-03-06 when a DOB of 1960-09-06 is applied to a Female', () => {
		assert.equal('2027-03-06', getStateRetirementDate('1960-09-06', 'F'));
	});

	it('should return 2027-03-06 when a DOB of 1960-09-06 is applied to a Male', () => {
		assert.equal('2027-03-06', getStateRetirementDate('1960-09-06', 'M'));
	});

	it('should return 2027-04-05 when a DOB of 1960-10-05 is applied to a Female', () => {
		assert.equal('2027-04-05', getStateRetirementDate('1960-10-05', 'F'));
	});

	it('should return 2027-04-05 when a DOB of 1960-10-05 is applied to a Male', () => {
		assert.equal('2027-04-05', getStateRetirementDate('1960-10-05', 'M'));
	});

	// Men & Women between 6 Oct 1960 - 5 Nov 1960
	it('should return 2027-05-06 when a DOB of 1960-10-06 is applied to a Female', () => {
		assert.equal('2027-05-06', getStateRetirementDate('1960-10-06', 'F'));
	});

	it('should return 2027-05-06 when a DOB of 1960-10-06 is applied to a Male', () => {
		assert.equal('2027-05-06', getStateRetirementDate('1960-10-06', 'M'));
	});

	it('should return 2027-06-05 when a DOB of 1960-11-05 is applied to a Female', () => {
		assert.equal('2027-06-05', getStateRetirementDate('1960-11-05', 'F'));
	});

	it('should return 2027-06-05 when a DOB of 1960-11-05 is applied to a Male', () => {
		assert.equal('2027-06-05', getStateRetirementDate('1960-11-05', 'M'));
	});

	// Men & Women between 6 Nov 1960 - 5 Dec 1960
	it('should return 2027-07-06 when a DOB of 1960-11-06 is applied to a Female', () => {
		assert.equal('2027-07-06', getStateRetirementDate('1960-11-06', 'F'));
	});

	it('should return 2027-07-06 when a DOB of 1960-11-06 is applied to a Male', () => {
		assert.equal('2027-07-06', getStateRetirementDate('1960-11-06', 'M'));
	});

	it('should return 2027-08-05 when a DOB of 1960-12-05 is applied to a Female', () => {
		assert.equal('2027-08-05', getStateRetirementDate('1960-12-05', 'F'));
	});

	it('should return 2027-08-05 when a DOB of 1960-12-05 is applied to a Male', () => {
		assert.equal('2027-08-05', getStateRetirementDate('1960-12-05', 'M'));
	});

	// Men & Women between 6 Dec 1960 - 5 Jan 1961
	it('should return 2027-09-06 when a DOB of 1960-12-06 is applied to a Female', () => {
		assert.equal('2027-09-06', getStateRetirementDate('1960-12-06', 'F'));
	});

	it('should return 2027-09-06 when a DOB of 1960-12-06 is applied to a Male', () => {
		assert.equal('2027-09-06', getStateRetirementDate('1960-12-06', 'M'));
	});

	it('should return 2027-09-30 when a DOB of 1960-12-31 is applied to a Female', () => {
		assert.equal('2027-09-30', getStateRetirementDate('1960-12-31', 'F'));
	});

	it('should return 2027-09-30 when a DOB of 1960-12-31 is applied to a Male', () => {
		assert.equal('2027-09-30', getStateRetirementDate('1960-12-31', 'M'));
	});

	it('should return 2027-10-05 when a DOB of 1961-01-05 is applied to a Female', () => {
		assert.equal('2027-10-05', getStateRetirementDate('1961-01-05', 'F'));
	});

	it('should return 2027-10-05 when a DOB of 1961-01-05 is applied to a Male', () => {
		assert.equal('2027-10-05', getStateRetirementDate('1961-01-05', 'M'));
	});

	// Men & Women between 6 Jan 1961 - 5 Feb 1961
	it('should return 2027-11-06 when a DOB of 1961-01-06 is applied to a Female', () => {
		assert.equal('2027-11-06', getStateRetirementDate('1961-01-06', 'F'));
	});

	it('should return 2027-11-06 when a DOB of 1961-01-06 is applied to a Male', () => {
		assert.equal('2027-11-06', getStateRetirementDate('1961-01-06', 'M'));
	});

	it('should return 2027-11-30 when a DOB of 1961-01-31 is applied to a Female', () => {
		assert.equal('2027-11-30', getStateRetirementDate('1961-01-31', 'F'));
	});

	it('should return 2027-11-30 when a DOB of 1961-01-31 is applied to a Male', () => {
		assert.equal('2027-11-30', getStateRetirementDate('1961-01-31', 'M'));
	});

	it('should return 2027-12-05 when a DOB of 1961-02-05 is applied to a Female', () => {
		assert.equal('2027-12-05', getStateRetirementDate('1961-02-05', 'F'));
	});

	it('should return 2027-12-05 when a DOB of 1961-02-05 is applied to a Male', () => {
		assert.equal('2027-12-05', getStateRetirementDate('1961-02-05', 'M'));
	});

	// Men & Women between 6 Feb 1961 - 5 Mar 1961
	it('should return 2028-01-06 when a DOB of 1961-02-06 is applied to a Female', () => {
		assert.equal('2028-01-06', getStateRetirementDate('1961-02-06', 'F'));
	});

	it('should return 2028-01-06 when a DOB of 1961-02-06 is applied to a Male', () => {
		assert.equal('2028-01-06', getStateRetirementDate('1961-02-06', 'M'));
	});

	it('should return 2028-02-05 when a DOB of 1961-03-05 is applied to a Female', () => {
		assert.equal('2028-02-05', getStateRetirementDate('1961-03-05', 'F'));
	});

	it('should return 2028-02-05 when a DOB of 1961-03-05 is applied to a Male', () => {
		assert.equal('2028-02-05', getStateRetirementDate('1961-03-05', 'M'));
	});

	// Men & Women between 6 Mar 1961 - 5 Apr 1977
	it('should return 2028-03-06 when a DOB of 1961-03-06 is applied to a Female', () => {
		assert.equal('2028-03-06', getStateRetirementDate('1961-03-06', 'F'));
	});

	it('should return 2028-03-06 when a DOB of 1961-03-06 is applied to a Male', () => {
		assert.equal('2028-03-06', getStateRetirementDate('1961-03-06', 'M'));
	});

	it('should return 2044-04-05 when a DOB of 1977-04-05 is applied to a Female', () => {
		assert.equal('2044-04-05', getStateRetirementDate('1977-04-05', 'F'));
	});

	it('should return 2044-04-05 when a DOB of 1977-04-05 is applied to a Male', () => {
		assert.equal('2044-04-05', getStateRetirementDate('1977-04-05', 'M'));
	});

	//
	// Pensions act 2007
	//
	// Men & Women between 6 Apr 1977 - 5 May 1977
	it('should return 2044-05-06 when a DOB of 1977-04-06 is applied to a Female', () => {
		assert.equal('2044-05-06', getStateRetirementDate('1977-04-06', 'F'));
	});

	it('should return 2044-05-06 when a DOB of 1977-04-06 is applied to a Male', () => {
		assert.equal('2044-05-06', getStateRetirementDate('1977-04-06', 'M'));
	});

	it('should return 2044-05-06 when a DOB of 1977-05-05 is applied to a Female', () => {
		assert.equal('2044-05-06', getStateRetirementDate('1977-05-05', 'F'));
	});

	it('should return 2044-05-06 when a DOB of 1977-05-05 is applied to a Male', () => {
		assert.equal('2044-05-06', getStateRetirementDate('1977-05-05', 'M'));
	});

	// Men & Women between 6 May 1977 - 5 Jun 1977
	it('should return 2044-07-06 when a DOB of 1977-05-06 is applied to a Female', () => {
		assert.equal('2044-07-06', getStateRetirementDate('1977-05-06', 'F'));
	});

	it('should return 2044-07-06 when a DOB of 1977-05-06 is applied to a Male', () => {
		assert.equal('2044-07-06', getStateRetirementDate('1977-05-06', 'M'));
	});

	it('should return 2044-07-06 when a DOB of 1977-06-05 is applied to a Female', () => {
		assert.equal('2044-07-06', getStateRetirementDate('1977-06-05', 'F'));
	});

	it('should return 2044-07-06 when a DOB of 1977-06-05 is applied to a Male', () => {
		assert.equal('2044-07-06', getStateRetirementDate('1977-06-05', 'M'));
	});

	// Men & Women between 6 Jun 1977 - 5 Jul 1977
	it('should return 2044-09-06 when a DOB of 1977-06-06 is applied to a Female', () => {
		assert.equal('2044-09-06', getStateRetirementDate('1977-06-06', 'F'));
	});

	it('should return 2044-09-06 when a DOB of 1977-06-06 is applied to a Male', () => {
		assert.equal('2044-09-06', getStateRetirementDate('1977-06-06', 'M'));
	});

	it('should return 2044-09-06 when a DOB of 1977-07-05 is applied to a Female', () => {
		assert.equal('2044-09-06', getStateRetirementDate('1977-07-05', 'F'));
	});

	it('should return 2044-09-06 when a DOB of 1977-07-05 is applied to a Male', () => {
		assert.equal('2044-09-06', getStateRetirementDate('1977-07-05', 'M'));
	});

	// Men & Women between 6 Jul 1977 - 5 Aug 1977
	it('should return 2044-11-06 when a DOB of 1977-07-06 is applied to a Female', () => {
		assert.equal('2044-11-06', getStateRetirementDate('1977-07-06', 'F'));
	});

	it('should return 2044-11-06 when a DOB of 1977-07-06 is applied to a Male', () => {
		assert.equal('2044-11-06', getStateRetirementDate('1977-07-06', 'M'));
	});

	it('should return 2044-11-06 when a DOB of 1977-08-05 is applied to a Female', () => {
		assert.equal('2044-11-06', getStateRetirementDate('1977-08-05', 'F'));
	});

	it('should return 2044-11-06 when a DOB of 1977-08-05 is applied to a Male', () => {
		assert.equal('2044-11-06', getStateRetirementDate('1977-08-05', 'M'));
	});

	// Men & Women between 6 Aug 1977 - 5 Sep 1977
	it('should return 2045-01-06 when a DOB of 1977-08-06 is applied to a Female', () => {
		assert.equal('2045-01-06', getStateRetirementDate('1977-08-06', 'F'));
	});

	it('should return 2045-01-06 when a DOB of 1977-08-06 is applied to a Male', () => {
		assert.equal('2045-01-06', getStateRetirementDate('1977-08-06', 'M'));
	});

	it('should return 2045-01-06 when a DOB of 1977-09-05 is applied to a Female', () => {
		assert.equal('2045-01-06', getStateRetirementDate('1977-09-05', 'F'));
	});

	it('should return 2045-01-06 when a DOB of 1977-09-05 is applied to a Male', () => {
		assert.equal('2045-01-06', getStateRetirementDate('1977-09-05', 'M'));
	});

	// Men & Women between 6 Sep 1977 - 5 Oct 1977
	it('should return 2045-03-06 when a DOB of 1977-09-06 is applied to a Female', () => {
		assert.equal('2045-03-06', getStateRetirementDate('1977-09-06', 'F'));
	});

	it('should return 2045-03-06 when a DOB of 1977-09-06 is applied to a Male', () => {
		assert.equal('2045-03-06', getStateRetirementDate('1977-09-06', 'M'));
	});

	it('should return 2045-03-06 when a DOB of 1977-10-05 is applied to a Female', () => {
		assert.equal('2045-03-06', getStateRetirementDate('1977-10-05', 'F'));
	});

	it('should return 2045-03-06 when a DOB of 1977-10-05 is applied to a Male', () => {
		assert.equal('2045-03-06', getStateRetirementDate('1977-10-05', 'M'));
	});

	// Men & Women between 6 Oct 1977 - 5 Nov 1977
	it('should return 2045-05-06 when a DOB of 1977-10-06 is applied to a Female', () => {
		assert.equal('2045-05-06', getStateRetirementDate('1977-10-06', 'F'));
	});

	it('should return 2045-05-06 when a DOB of 1977-10-06 is applied to a Male', () => {
		assert.equal('2045-05-06', getStateRetirementDate('1977-10-06', 'M'));
	});

	it('should return 2045-05-06 when a DOB of 1977-11-05 is applied to a Female', () => {
		assert.equal('2045-05-06', getStateRetirementDate('1977-11-05', 'F'));
	});

	it('should return 2045-05-06 when a DOB of 1977-11-05 is applied to a Male', () => {
		assert.equal('2045-05-06', getStateRetirementDate('1977-11-05', 'M'));
	});

	// Men & Women between 6 Nov 1977 - 5 Dec 1977
	it('should return 2045-07-06 when a DOB of 1977-11-06 is applied to a Female', () => {
		assert.equal('2045-07-06', getStateRetirementDate('1977-11-06', 'F'));
	});

	it('should return 2045-07-06 when a DOB of 1977-11-06 is applied to a Male', () => {
		assert.equal('2045-07-06', getStateRetirementDate('1977-11-06', 'M'));
	});

	it('should return 2045-07-06 when a DOB of 1977-12-05 is applied to a Female', () => {
		assert.equal('2045-07-06', getStateRetirementDate('1977-12-05', 'F'));
	});

	it('should return 2045-07-06 when a DOB of 1977-12-05 is applied to a Male', () => {
		assert.equal('2045-07-06', getStateRetirementDate('1977-12-05', 'M'));
	});

	// Men & Women between 6 Dec 1977 - 5 Jan 1978
	it('should return 2045-09-06 when a DOB of 1977-12-06 is applied to a Female', () => {
		assert.equal('2045-09-06', getStateRetirementDate('1977-12-06', 'F'));
	});

	it('should return 2045-09-06 when a DOB of 1977-12-06 is applied to a Male', () => {
		assert.equal('2045-09-06', getStateRetirementDate('1977-12-06', 'M'));
	});

	it('should return 2045-09-06 when a DOB of 1978-01-05 is applied to a Female', () => {
		assert.equal('2045-09-06', getStateRetirementDate('1978-01-05', 'F'));
	});

	it('should return 2045-09-06 when a DOB of 1978-01-05 is applied to a Male', () => {
		assert.equal('2045-09-06', getStateRetirementDate('1978-01-05', 'M'));
	});

	// Men & Women between 6 Jan 1978 - 5 Feb 1978
	it('should return 2045-11-06 when a DOB of 1978-01-06 is applied to a Female', () => {
		assert.equal('2045-11-06', getStateRetirementDate('1978-01-06', 'F'));
	});

	it('should return 2045-11-06 when a DOB of 1978-01-06 is applied to a Male', () => {
		assert.equal('2045-11-06', getStateRetirementDate('1978-01-06', 'M'));
	});

	it('should return 2045-11-06 when a DOB of 1978-02-05 is applied to a Female', () => {
		assert.equal('2045-11-06', getStateRetirementDate('1978-02-05', 'F'));
	});

	it('should return 2045-11-06 when a DOB of 1978-02-05 is applied to a Male', () => {
		assert.equal('2045-11-06', getStateRetirementDate('1978-02-05', 'M'));
	});

	// Men & Women between 6 Feb 1978 - 5 Mar 1978
	it('should return 2046-01-06 when a DOB of 1978-02-06 is applied to a Female', () => {
		assert.equal('2046-01-06', getStateRetirementDate('1978-02-06', 'F'));
	});

	it('should return 2046-01-06 when a DOB of 1978-02-06 is applied to a Male', () => {
		assert.equal('2046-01-06', getStateRetirementDate('1978-02-06', 'M'));
	});

	it('should return 2046-01-06 when a DOB of 1978-03-05 is applied to a Female', () => {
		assert.equal('2046-01-06', getStateRetirementDate('1978-03-05', 'F'));
	});

	it('should return 2046-01-06 when a DOB of 1978-03-05 is applied to a Male', () => {
		assert.equal('2046-01-06', getStateRetirementDate('1978-03-05', 'M'));
	});

	// Men & Women between 6 Mar 1978 - 5 Apr 1978
	it('should return 2046-03-06 when a DOB of 1978-03-06 is applied to a Female', () => {
		assert.equal('2046-03-06', getStateRetirementDate('1978-03-06', 'F'));
	});

	it('should return 2046-03-06 when a DOB of 1978-03-06 is applied to a Male', () => {
		assert.equal('2046-03-06', getStateRetirementDate('1978-03-06', 'M'));
	});

	it('should return 2046-03-06 when a DOB of 1978-04-05 is applied to a Female', () => {
		assert.equal('2046-03-06', getStateRetirementDate('1978-04-05', 'F'));
	});

	it('should return 2046-03-06 when a DOB of 1978-04-05 is applied to a Male', () => {
		assert.equal('2046-03-06', getStateRetirementDate('1978-04-05', 'M'));
	});

	// Men & Women between 6 Apr 1978 - onwards
	it('should return 2046-04-06 when a DOB of 1978-04-06 is applied to a Female', () => {
		assert.equal('2046-04-06', getStateRetirementDate('1978-04-06', 'F'));
	});

	it('should return 2046-04-06 when a DOB of 1978-04-06 is applied to a Male', () => {
		assert.equal('2046-04-06', getStateRetirementDate('1978-04-06', 'M'));
	});

	// Random future date - 29 Feb 2020
	it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a Female', () => {
		assert.equal('2088-02-29', getStateRetirementDate('2020-02-29', 'F'));
	});

	it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a Male', () => {
		assert.equal('2088-02-29', getStateRetirementDate('2020-02-29', 'M'));
	});
});
