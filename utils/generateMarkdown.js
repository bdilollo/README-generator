// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `https://img.shields.io/static/v1?label=License&message=MIT&color=<yellow>`;
  } else if (license == 'GNU GPL v3.0') {
    return `https://img.shields.io/static/v1?label=License&message=GPL_v3.0&color=<blue>`;
  } else if (license == 'Apache 2.0') {
    return `https://img.shields.io/static/v1?label=License&message=Apache_2.0&color=<yellowgreen>`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == 'GNU GPL v3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `[![](${badge})](${link})`;
}

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
  ${renderLicenseSection(data.license)}
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
  [GitHub](https://github.com/bdilollo/${data.github})  
  For additional questions, contact me at ${data.email}`;
}

module.exports = generateMarkdown;
