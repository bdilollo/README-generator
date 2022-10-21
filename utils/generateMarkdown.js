// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let navLinks = ``;
  let generateNav = function(data) {
    for (let i=0; i<data.length; i++) {
      navLinks += `[${data[i]}](#${data[i]})   
    `;
  }
  return navLinks;
};
  return `# ${data.title}
  ![](https://img.shields.io/static/v1?label=License&message=${data.license}&color=<blue>)

  ---

  ## Description
  ${data.description}

  ---

  ## Table of Contents
  ${generateNav(data.table)}

  ---
  
  ## installation
  ${data.installation}

  ---
  
  ## usage
  ${data.usage}

  ---
  
  ## License
  ${data.license} &#124; 2022

  ---
  
  ## contribute
  ${data.contribute}
  
  ---
  
  ## tests
  ${data.tests}

  ---
  
  ## questions
  For questions, contact me at:
  [GitHub](https://github.com/bdilollo/${data.github})
  or
  ${data.email}`;
}

module.exports = generateMarkdown;
