# get-uk-state-pension-date #

This package can be used in two different ways.

1) If cloned from the repository, then you can start a server process that
provides a REST API call to return the State Pension Date.

2) If installed as an NPM package as part of another project, then it provides
a function that returns the State Pension Date.

## 1) Server process

## 2) NPM package

This package, provides one simple function that allows the calculation of the
Date on which a UK citizen becomes elligible for their State Pension.

The returned function is defined as...

```javascript
module.exports = function(dateOfBirth, gender) {...}
```

Where...

* 'dateOfBirth' must be in the YYYY-MM-DD format.
* 'gender' must be either 'F' (Female), or 'M' (Male). 
* YYYY-MM-DD is the only format supported.
* The YYYY section of the Date of Birth must be in the range 1000 - 4000 (Arbitrary limits imposed by author).
* Function returns a string containing the State Pension Date in the YYYY-MM-DD format.
* If the State Pension Date cannot be determined, a value of 'undefined' will be returned.
* Invalid date values (e.g. 29 feb in non-leap years, or 31 April etc.) will result in 'undefined'
* Invalid gender values (anything other than 'F' or 'M') will result in 'undefined'

## Simple example

```shell
npm install get-uk-state-pension-date
```
Once installed, then the function can simply be required within a Javascrip file
as follows...

```javascript
// Require the module
const getUkStatePensionDate = require('get-uk-state-pension-date');

// Get state pension date for a male born on 25 March 1990
const pensionDate = getUkStatePensionDate('1990-03-25', 'M');

// Write result to console
console.log(`For a male born on 25 March 1990, their state Pension Date would be ${pensionDate}`);
```

## API

