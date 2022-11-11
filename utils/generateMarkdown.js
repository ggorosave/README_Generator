// Renders table of contents
function renderTableOfContents(installation, usage, license, contributing, tests) {
  // installation, usage, licence
  if (installation === '' &&
    usage === '' &&
    license === 'None' &&
    contributing === '' &&
    tests === '') {
    return '';
  }

  function includeInstallCheck(installation) {
    return installation === '' ? '' : `- [Installation](#installation)`;
  };
  function includeUsageCheck(usage) {
    return usage === '' ? '' : `- [Usage](#usage)`;
  };
  function includeLicenseCheck(license) {
    return license === 'None' ? '' : `- [License](#license)`
  };
  function includeContributeCheck(contributing) {
    return contributing === '' ? '' : `- [Contributing](#contributing)`;
  };
  function includeTestsCheck(tests) {
    return tests === '' ? '' : `- [Tests](#tests)`;
  };

  return `
## Table of Contents 

${includeInstallCheck(installation)}
${includeUsageCheck(usage)}
${includeLicenseCheck(license)}
${includeContributeCheck(contributing)}
${includeTestsCheck(tests)}
- [Questions](#questions)`
};

// Renders installation section
function renderInstallationSection(installation) {
  return installation === '' ? '' : `
## Installation

To install the necessary dependencies after cloning the repo, run the following conmmand(s):
  
\`\`\`
${installation}
\`\`\``
};

// Renders Usage section
function renderUsageSection(usage) {
  return usage === '' ? '' : `
## Usage

${usage}`
};

// Renders license badge when the user  includes a license
function renderLicenseBadge(license) {
  return license === 'None' ? '' : `![License](https://img.shields.io/badge/License-${license}-blue)`;
};

// Renders and link to the license 
function renderLicenseLink(github, repoName, license) {
  return license === 'None' ? '' : `	[${license}](https://github.com/${github}/${repoName}/blob/main/LICENSE)`;
};


// Renders the license section if the user selects a license
function renderLicenseSection(github, repoName, license) {
  return license === 'None' ? '' : `
## License

This project is licensed under the ${renderLicenseLink(github, repoName, license)} license.`;
};

// Renders Contributing section
function renderContributingSection(contributing) {
  return contributing === '' ? '' : `
## Contributing

${contributing}`;
};

// Renders Tests section
function renderTestsSection(tests) {
  return tests === '' ? '' : `
## Tests

To run tests, run the following command:
\`\`\`
${tests}
\`\`\``;
};

// Generates the markdown with the given data
function generateMarkdown({ github, email, title, repoName, description, installation, usage, license, contributing, tests }) {
  return `# ${title}
${renderLicenseBadge(license)}

## Description
${description}
${renderTableOfContents(installation, usage, license, contributing, tests)}
${renderInstallationSection(installation)}
${renderUsageSection(usage)}
${renderLicenseSection(github, repoName, license)}
${renderContributingSection(contributing)}
${renderTestsSection(tests)}

## Questions

If you have any questions about the repo, contact me at [${email}](mailto:${email}). Find more of my work at [${github}](https://https://github.com/${github}).
`;
}

module.exports = generateMarkdown;
