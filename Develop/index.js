// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const fileName = "README"
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
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("You've got a username, dude, or you wouldn't be making this project. Please enter a valid username");
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
                console.log("I promise your project isn't completely useless. You worked very hard on this. Please descript the possible usage for your project" );
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
        type: 'list',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'GNU AGPLv3', 'MIT', 'Mozilla Public License 2.0']
    },
];


// questions()
//     .then(function (data) {
//         const fileName = data.fileName + ".md"
//         fs.writeFile(fileName, function(err) {
//             if (err) {
//                 return console.log(err);
//             }
//         });
//         console.log("success");
//     });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        (err) ? console.error(err) : console.log("success"));
        console.log("Your README.md file has been successfully generated");
};

// TODO: Create a function to initialize app
const init = async () => {
    try {
        const data = await inquirer.prompt(questions); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
        console.log(data);
        writeToFile('./dist/README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
