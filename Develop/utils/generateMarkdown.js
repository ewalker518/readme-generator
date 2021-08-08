// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// const { table } = require("console");

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

let year = new Date();

const generateMarkdown = (data) => {
  switch (data.license) {
    case 'Apache License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case 'GNU GPLv3':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    case 'GNU AGPLv3':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;

    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;

    case 'Mozilla Public License 2.0':
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    break;
    default:
    break;
  }

  let tableContents = 
  `
  \n## Table of Contents\n
  * [Installation](#installation)\n
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#test)
  * [License](#license)
  `

  let readMeTemplate = `# ${data.title}\n`;

  readMeTemplate += `\n${licenseBadge}\n`

  readMeTemplate += `\n## Description${data.description}\n`

  readMeTemplate += tableContents;

  readMeTemplate += `\n## Installation${data.installation}\n`

  readMeTemplate += `\n## Usage${data.usage}\n`

  readMeTemplate += `\n## Contributing${data.contributing}\n`

  readMeTemplate += `\n## Testing${data.test}\n`

  readMeTemplate += `\n## License \nLicensed under the ${data.license} License. Copyright &copy ${year.getFullYear}\n` //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

  readMeTemplate += `\n## Questions\n*Feel free to reach out, find me at* \nGitHub: [@${data.username}](https://github.com/${data.username}/)`

  return readMeTemplate;
  
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(userData) {
//   return `
// # ${data.title} \n
// ## ${data.description} \n
// ## ${data.installation} \n
// ## ${data.usage} \n
// ## ${data.contributing} \n
// ## ${data.test} \n
// ## ${data.license} \n
// `;
// }

module.exports = generateMarkdown;
