// TODO: Include packages needed for this application
//const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
                return false;
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
                console.log("I promise your project isn't completely useless. You worked very hard on this. Please descript the possible usgae for your project" );
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like other developers to be able to contribute to your project, please provide some instructions and guidelines for how to do so',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please list any options for testing your project as well as instructions on how to do so',
        default: 'N/A'
    },
    {
        type: 'select',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['Apache License 2.0', 'BSD 3-Clause', 'MIT', 'GNU General Public License', 'Mozilla Public License 2.0']
    },
]);
}

questions()
    .then(function (data) {
        console.log("success");
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
