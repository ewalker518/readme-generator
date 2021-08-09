const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = "README"

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter a valid username');
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
                console.log('Your project is not just an empty void. Please enter your description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for the use of your project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe the possible usage for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like other developers to be able to contribute to your project, please provide some instructions and guidelines for how to do so',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please list any options for testing your project as well as instructions on how to do so',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'GNU AGPLv3', 'MIT', 'Mozilla Public License 2.0']
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        (err) ? console.error(err) : console.log("Your README.md file has been successfully generated"));
};

// Function to initialize app
const init = async () => {
    try {
        const data = await inquirer.prompt(questions); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
        writeToFile('./dist/README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
