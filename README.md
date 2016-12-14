# get-uk-state-pension-date #

This package can be used in two different ways.

1) Installed from a GitLab repository, as a dependency in your package.json file.

2) Cloned from the repository to provide a simple REST based service.

## 1) Package dependency

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
npm install --save git+ssh://git@gitlab.itsshared.net:bereavement-support-payment/state-pension-date.git
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

**Note:** This functionality is very simplistic, and was only developed as an aid
during development.  It would require more work to make it into a robust service.

Example query...

```html
http://localhost/1990-03-10/M
```

Would return...

```html
For a Date of birth of '1990-03-10' and a Gender of 'm', the calculated pension date is: 2058-03-10
```

