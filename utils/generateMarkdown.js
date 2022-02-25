const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
        return `![License](http://img.shields.io/badge/license-${license}-blue.svg)`
}
};

const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `- [License](#License)`
  }
 };

const renderLicenseSection = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `## License
    
    This application is covered by the ${license} license.`
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Description
 
  ${data.description}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  
  ${renderLicenseLink(data.license)}
  - [Questions](#Questions)
  ## Installation
  
  ${data.installation}
  ## Usage
  
  ${data.usage}
  ## Contributing
  
  ${data.contributions}
  ## Tests
 
  ${data.test}
  
  ${renderLicenseSection(data.license)}
 
  ${renderLicenseBadge(data.license)}
  ## Questions
  If you have any questions regarding this project, feel free to reach out to the GitHub username and/or email below:
  - GitHub: https://github.com/${data.github}
  - Email address: ${data.email}
`;
}

module.exports = generateMarkdown;