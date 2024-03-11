// Including the packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// Importing classes from ./lib/shapes directory for our module shapes.
// const { Triangle, Square, Circle } = require("./lib/shapes");

// Using the answers from the user, the function writeToFile creates the SVG file.
function writeToFile(fileName, answers) {
    // Variable starts as an empty string.
    var svgString = "";
    // Setting width and height as asked for in the Acceptance Criteria.
    // Used the site https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#NamespaceAndDTDIdentifiers to learn about SVG namespace and identifiers.
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // The following tag ensures that the user font will be on top of the shape, not the opposite.
    svgString += "<g>";
    // Takes user answer for which shape they want and inserts it into SVG file.
    svgString += `${answers.shape}`;
  
    // If-else statement adds shape/polygon properties to the svgString from the user input for what shape they chose.
    var shapeChoice;
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
    // Polygon properties given in the Getting Started Section of the Assignment
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
    // The x position of the top left corner of the rectangle.
    // The y position of the top left corner of the rectangle.
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
      shapeChoice = new Circle();
    // The x position of the center of the circle.
    // The y position of the center of the circle.
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }
  
    // The x and y attributes determine where in the viewport the text will appear. 
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    // Closing our tags.
    svgString += "</g>";
    svgString += "</svg>";
  
    // Using writeFile to generate an SVG file.
    // This takes in the file name given in the promptUser function, the svgString, and a ternary operator which handles logging any errors, or a "Created our logo.svg" message to the console  
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Created our logo.svg");
    });
  }

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
        //   writeToFile("logo.svg", answers);
        }
      });
  }

// Calling the promptUser function to ensure the application is run properly.
promptUser();