// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === 'None' ? '' : `![License](https://img.shields.io/badge/License-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(github, repoName, license) {
  return license === 'None' ? '' : `	[${license}](https://github.com/${github}/${repoName}/blob/main/LICENSE)`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(github, repoName, license) {
  return license === 'None' ? '' : `## License
  This project is licensed under the ${renderLicenseLink(github, repoName, license)} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ github, email, title, repoName, description, installation, usage, license, contributing, tests }) {
  return `# ${title}
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following conmmand:

\`\`\`
${installation}
\`\`\`

## Usage

${usage}

${renderLicenseSection(github, repoName, license)}

## Contributing

${contributing}

## Tests

To run tests, run the following command:
\`\`\`
${tests}
\`\`\`

## Questions

If you have any questions about the repo, contact me at 	[${email}](mailto:${email}). Find more of my work at 	[${github}](https://https://github.com/${github}).
`;
}

module.exports = generateMarkdown;
