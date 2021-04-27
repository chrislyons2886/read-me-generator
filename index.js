const inquirer = require('inquirer');
const fs = require('fs');
//const { deflateRawSync } = require('zlib');
inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter your project title?',
    name: 'title',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please enter your project description?',
    name: 'description',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please describe the Installation',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please describe the usage',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please list your Contributors',
    name: 'contributors',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please list your Instructions',
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please list your credits',
    name: 'credits',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'list',
    message: 'Please choose your license',
    name: 'license',
    choices: ['MIT', 'Apache',],
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please enter your GitHub path',
    name: 'gitHub',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  }
]
)
.then((data) => {
  let licenseLink = ""
  if (data.license==="Apache") {
   licenseLink =  "Apache-2.0"
  }
  else if (data.license==="MIT"){
    licenseLink = "MIT"
  }
 
  const filename = 'README.md';
  const readMe = `
  # ${data.title} / ${data.license} License
  # Description
  # ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contributors)
  * [Credits](#credits)
  * [License](#license)
  
  # Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributors}
  ### Instructions
  ${data.instructions}
  ## Credits
  ${data.credits}
  ## License
  The application you're enjoying is covered under the ${data.license} license.
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${licenseLink})
  # Questions
    For questions, please email me, or contact me via GitHub.
  * Email: ${data.email}
  * GitHub: ${data.gitHub}`;
  console.log(readMe);
  fs.writeFile(filename, readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});