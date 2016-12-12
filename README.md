# get-uk-state-pension-date #

This package can be used in two different ways.

1) If installed as an NPM package as part of another project, then it provides
two functions that return the State Pension Date for a given Date of Birth and
Gender.

2) If cloned from the repository, then you can start a server process that
provides a REST API call to return the State Pension Date.

## 1) NPM package

This package, provides two simple functions that allows the calculation of the
Date on which a UK citizen becomes elligible for their State Pension.

The functions are...

```javascript
getStatePensionDate(dateOfBirth, gender)
getStatePensionDateAsString(dateOfBirth, gender)
```

Where...

* 'dateOfBirth' must be in the YYYY-MM-DD format.
* 'gender' must be either 'F' (Female), or 'M' (Male). 
* YYYY-MM-DD is the only format supported.
* The YYYY section of the Date of Birth must be in the range 1000 - 4000 (Arbitrary limits imposed by author).
* The 'getStatePensionDate' function returns a Date object representing the State Pension Date.
* The 'getStatePensionDateAsString' function returns a String containing the State Pension Date in the YYYY-MM-DD format.
* If the State Pension Date cannot be determined, a value of 'undefined' will be returned (by both functions).
* Invalid date values (e.g. 29 feb in non-leap years, or 31 April etc.) will result in 'undefined' being returned (by both functions).
* Invalid gender values (anything other than 'F' or 'M') will result in 'undefined' being returned (by both functions).

## Example

```shell
npm install get-uk-state-pension-date
```
Once installed, then the functions can simply be required within a Javascrip file
as follows...

```javascript
// Require the module
const UKStatePension = require('get-uk-state-pension-date');

const getUkStatePensionDate = UKStatePension.getUkStatePensionDate;
const getUkStatePensionDateAsString = UKStatePension.getUkStatePensionDateAsString;

// Get state pension date for a male born on 25 March 1990
const pensionDate = getUkStatePensionDate('1990-03-25', 'M');

// Get the same item as a string
const pensionDateString = getUkStatePensionDateAsString('1990-03-25', 'M');

// Write result to console
console.log(`For a male born on 25 March 1990, their state Pension Date would be ${pensionDateString}`);
```

## 2) Server process
After cloning the project from a repository, and running 'npm install', then you can start a simple server by executing...

```script
npm start
```

This will start a service listening by default on port 5000.

Once running, the service will accept requests that supply a date of birth and a
gender, and will return a simple piece of content showing the state pension
date.

This functionality is very simplistic, and was only developed as an aid
during development.

Example query...

```html
http://localhost/1990-03-10/M
```

Would return...

```html
For a Date of birth of '1990-03-10' and a Gender of 'm', the calculated pension date is: 2058-03-10
```

