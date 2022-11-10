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
`;
}

module.exports = generateMarkdown;
