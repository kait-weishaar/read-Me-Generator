// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
    if (license==='IBM') {
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    };
    if (license==='MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (license==='Mozilla') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if(license==='GNU FDL v1.3') {
      return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)'
    }
    if (license==='Apache') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if (license==='BSD') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
   
  
}





const generateContents = data => {
  let {tableOfContents} = data;
  console.log(data);
  //  started like this
//   for(let n=0; n<data.tableOfContents.length; n++) {
//     if (data.tableOfContents[n]) {
//       console.log(data.tableOfContents[n])
//     contents += `* [${data.tableOfContents[n]}](#${data.tableOfContents[n].toLowerCase()}) \n`
//   }
// }

// but now we are here
let mappedArray = tableOfContents.map(content => {
  return `* [${content}](#${content.toLowerCase()})`
})
let contents = mappedArray.join('\n')

return contents;
}

const generateInstallation = data => {
  if(data.tableOfContents.includes('Installation')) {
    return `${data.installation}`
  } else {
    return ''
  }
}

const generateUsage = data => {
  if(data.tableOfContents.includes('Usage')) {
    return `${data.usage}`
  } else {
    return ''
  }
}
 
const generateFeatures = data => {
  let featuresList = data.features.split(', ')
  let mappedArray = featuresList.map(content => {
    return `* ${content}`
  })
  let featureContents = mappedArray.join('\n')
  
  return featureContents;
  }



const generateContributors = data => {
  if (data.tableOfContents.includes('Contributors')) {
    return `${data.contributors}`
  } else {
    return ''
  }
}

const generateContributing = data => {
  if (data.tableOfContents.includes('Contributing')) {
    return `${data.contributing}`
  } else {
    return ''
  }
}

const generateQuestions = data => {
  if (data.tableOfContents.includes('Questions')) {
    return `Email: ${data.email}    
     \nGithub: https://github.com/${data.github}`
  } else {
    return ''
  }
}

const generateLicense = data => {
  if (data.tableOfContents.includes('License')) {
    return `This project is licensed under ${data.license}`
  } else {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
${generateContents(data)}

## Installation
${generateInstallation(data)}

## Usage 
${generateUsage(data)}


## Features
${generateFeatures(data)}

## Contributors
${generateContributors(data)}

## Contributing
${generateContributing(data)}

## Questions
${generateQuestions(data)}

## License
${generateLicense(data)}
`;
}

module.exports = generateMarkdown;
