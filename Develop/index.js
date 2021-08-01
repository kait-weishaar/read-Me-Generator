// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'Please select sections to include in your README',
    choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'Features', 'Contributors', 'Questions', 'License'],
    validate: tableOfContentsInput => {
      if(tableOfContentsInput) {
        return true;
      } else {
        console.log('Please choose at least one section.')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide any installation instructions users might need to enjoy your project.',
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes('Installation')) {
        return true;
      } else {
        return false;
      }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
      when: ({ tableOfContents }) => {
        if (tableOfContents.includes('Usage')) {
          return true;
        } else {
          return false;
        }
        }
    },
    {
      type: 'list',
      name: 'license',
      choices: ['IBM', 'MIT', 'Mozilla', 'GNU FDL v1.3', 'Apache', 'BSD'],
      when: ({ tableOfContents }) => {
        if (tableOfContents.includes('License')) {
          return true;
        } else {
          return false;
        }
        }
    },
    {
      type: 'input',
      name: 'features',
      message: 'Please enter a list of features. Use a comma to separate each feature.',
      when: ({ tableOfContents }) => {
        if (tableOfContents.includes('Features')) {
          return true;
        } else {
          return false;
        }
        }
    },
    {
      type:'input',
      name: 'contributors',
      message: 'Please provide the names of anyone who contributed to the project',
      when: ({ tableOfContents }) => {
        if (tableOfContents.includes('Contributors')) {
          return true;
        } else {
          return false;
        }
        }
    },

    {
      type:'input',
      name: 'contributing',
      message: 'How may others contribute to the project?',
      validate: contributingInput => {
        if(contributingInput) {
          return true;
        } else {
          return false;
        }
      }
    },

    {
      type:'input',
      name: 'email',
      message: 'Please provide a valid email address',
      validate: emailInput => {
        if(emailInput) {
          return true;
        } else {
          return false;
        }
      }
    },

    {
      type:'input',
      name: 'github',
      message: 'Please provide a github username',
      validate: githubInput => {
        if(githubInput) {
          return true;
        } else {
          return false;
        }
      }
    },

    {
      type:'input',
      name: 'tests',
      message: 'Please describe how to test your project',
      validate: testsInput => {
        if(testsInput) {
          return true;
        } else {
          return false;
        }
      } 
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./generated-README/${fileName}-README.md`, generateMarkdown(input), (err) =>{
    if (err) throw err      
    console.log('File generated!')
        
  })
  
}

let input={}
// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
  .then(response => {
    console.log(response)
    input=response
    writeToFile(input.title, input)

  })
}

// Function call to initialize app
init();
