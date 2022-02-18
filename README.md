# Note Taker


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://opensource.org/licenses/MIT



## Table of Contents
* [Description](#description) 
* [Installation Instructions](#installation)
* [Usage Instructions](#usage)
* [Contribution Guide](#contribute)
* [Tests](#tests)
* [Questions](#questions)


## Description
This project uses `express js` to handle backend database activity. The app itself combines both front end and backend development in order to allow users to create notes and save them in the database for future use. The database that is used in the project is only a json file stored in the db folder, but it demonstrates the functionality of the express backend for routing, RESTful api development, and CRUD functionality. 

Along with express, this app uses the following dependancies:
* nodemon
* uuid

`Nodemon` was used as a developer dependancy to make server reset easier during development, while `uuid` was used to generate unique id's for each new note that gets created.

The notes page provides a user with the screen view shown below, where saved notes are displayed in a list on the left, and the current input for a new note is the central-right section of the view.

![notes page](Assets/11-express-homework-demo-01.png)

Upon typing new information to be saved in a note to the inputs, the user will see a save button appear in the top right of the app (next to the add (+) button). Clicking this will send a `POST` request to the backend, which then handles adding the new note to the database.

![landing page](Assets/11-express-homework-demo-02.png)

## Installation
To Install and run this application yourself, follow the below step(s).

    npm i


## Usage
Install the dependancies using the above instrucitons and run the app using `npm start`.

The deployed application can be found at the following URL:    
https://evan-woods-note-taker.herokuapp.com


## Contribute
This project is done and does not require any further contributions.


## Tests
This project contains no tests and will not need any test implamentations.


## Questions
For any questions about the code please see my github for source code, email me at the address provided, or find my social media links on my portfolio website. 
* https://github.com/EvanCWoods
* evan.woods.dev@gmail.com
* https://evancwoods.github.io/Evan-Woods-Portfolio/