// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You can't just not have a title, buddy, please enter a title");
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for this project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Your project is not just an empty void. Please enter some kind of description");
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required for installation?',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for the use of your project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("I promise your project isn't completely useless. " );
            }
        }
    }
];
console.log(inquirer);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
