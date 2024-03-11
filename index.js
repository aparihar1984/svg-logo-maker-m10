// Including the packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// Importing classes from ./lib/shapes directory for our module shapes
// const { Triangle, Square, Circle } = require("./lib/shapes");

// The function uses .prompt to collect answers to the following questions from the user in the command line.
function promptUser() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "TEXT: Enter up to (3) Characters: ",
          name: "text",
        },
        {
          type: "input",
          message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number): ",
          name: "textColor",
        },
        {
          type: "input",
          message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number): ",
          name: "shapeBackgroundColor",
        },
        {
            type: "list",
            message: "Choose which shape you would like: ",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
        },
      ])
      .then((answers) => {
        // Error message if the user does not enter 3 characters (3 characters are needed for the logo to generate).
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          promptUser();
        } else {
          // Calling the write file function to generate an SVG file
          writeToFile("logo.svg", answers);
        }
      });
  }

// Calling the promptUser function to ensure the application is run properly.
promptUser();