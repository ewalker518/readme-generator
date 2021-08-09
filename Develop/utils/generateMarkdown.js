// Function to put together the contents of the README file
const generateMarkdown = (data) => {
  // Switch function to display the correct badge based on user input
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

  // Table of Contents structure
  let tableContents = 
  `
  \n## Table of Contents\n
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#test)
  * [License](#license)
  `
  // Current year to be displayed on the page
  let year = new Date();

  // Displaying user data within the structure of the page
  let readMeTemplate = `# ${data.title}\n`;

  readMeTemplate += `\n${licenseBadge}\n`

  readMeTemplate += `\n## Description\n${data.description}\n`

  readMeTemplate += tableContents;

  readMeTemplate += `\n## Installation\n${data.installation}\n`

  readMeTemplate += `\n## Usage\n${data.usage}\n`

  readMeTemplate += `\n## Contributing\n${data.contributing}\n`

  readMeTemplate += `\n## Testing\n${data.test}\n`

  readMeTemplate += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n` //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

  readMeTemplate += `\n## Questions\nFeel free to reach out with any questions you have, find me at \nGitHub: [@${data.username}](https://github.com/${data.username}/)`

  return readMeTemplate;
  
}

module.exports = generateMarkdown;
