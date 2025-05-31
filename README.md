<p align="center">
  <img src="./img/New-York-City-Skyline.png?auto=format&fit=crop&w=1200&q=80" alt="Colorful picture of nyc" width="600">
</p>
---
languages: javascript
tags: functions, arguments, invoking functions
---

# JS Timed Greeting by Sinem Kilicdere Moschos

This project is a simple JavaScript exercise that gives a greeting based on the time of day, using military time (0–23 hours).


- `isMorning(time)` returns true if the hour is between 6 and 11
- `isAfternoon(time)` returns true if the hour is between 12 and 19
- `isNight(time)` returns true if the hour is between 20 and 23 or between 0 and 5
- `greeting(time)` checks the time and returns one of the following strings:
  - "Good Morning!"
  - "Good Afternoon!"
  - "Good Night!"

The `greeting` function uses the other three helper functions to decide which greeting to return.

To get started:

1. Open a terminal in this project folder.
2. Run `npm install` to install the required packages.
3. Run the tests with one of these commands:



# Timed Greeting

## Instructions

Define four functions, `greeting`, `isMorning`, `isAfternoon`, `isNight`.

`greeting` should accept the current hour.
The `greeting` function should pass the hour right now to
the other three functions and based on their `true`/`false`
response, should give the appropriate greeting for the time
of day.

morning: 06 - 11: Good Morning!
afternoon: 12 - 19: Good Afternoon!
night: 20 - 05: Good Night!

Note we're using military time.

**Note**

You will be requiring and calling the helper functions, like `isMorning`, `isAfternoon` and `isNight` within `greeting`, so pass those specs first.

To run the specs follow these commands:

- first install the required node modules to run the tests
  `npm install`
- to run in the command line run
  `npm test -- spec/greeting.spec.js`

### or, via the custom script in package.json

`npm run answer`
