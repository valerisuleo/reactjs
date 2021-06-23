
## React Router & Google Maps

### Introduction

The task is to build a React app that consumes an Express API, containing the Seven Wonders of the World! The API has already been built, and the seeds file has been filled out.

### Requirements

* Use `axios` to make requests to the API.
* Use `npm i react-router-dom --save` to create a state for the 'index' page, which shows a list of all wonders.
* Create a second state for the 'show' page, which shows a single wonder.
* The url for the 'show' page should be `/wonders/:id` in the router, so we will need to use `this.props.match.params` to load the correct wonder on the page.
* The 'index' page should display when the app loads.

* we do not need to be able to create, edit or delete a wonder.

### Bonus

* Create a reusable card component.	