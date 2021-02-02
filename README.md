# Google Maps API con React y Redux

I have implemented a solution meeting the functional requirements of the technical test, using Redux to manage the state, and React to dynamically update the page whenever the state had been updated.

Co-ordinates retrieved from the Google API are passed into Redux for state management, and dynamically change the position of the center of the Google Maps instance. Upon a selected suggestion, the formatted address is also set as the marker description. The marker is then also set to display.

Regrettably, I did not give myself time to style or test the project as much as I would have liked to, but the required functionality is available for inspection.

## How to see the project

Once the repo has been pulled from, you will need to run:

`npm install`

within the main directory of the project. Once this has been completed, please run:

`npm start`

to start the project. A window should appear in your browser, showing the Google Map centered over Barcelona.

If you would like to see the example of the test, please run:

`npm run test`

This will allow you to see the test suite run and successfully pass the test written for one of my actions.

---

Many thanks for the opportunity.