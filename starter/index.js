const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let EmployeeArray = [];

const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is the manager's name?",
    validate: (input) => input ? true : 'Manager name cannot be empty.',
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is the manager's ID?",
    validate: (input) => input ? true : 'ID cannot be empty.',
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the manager's email?",
    validate: (email) => /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) ? true : 'Please enter a valid email address.',
  },
];
function addMember(type) {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: `What is the ${type}'s name?`,
      validate: (input) => input ? true : `Name cannot be empty.`,
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the ${type}'s ID?`,
      validate: (input) => input ? true : 'ID cannot be empty.',
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the ${type}'s email?`,
      validate: (email) => /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) ? true : 'Please enter a valid email address.',
    },
  ];

  if (type === 'engineer') {
    questions.push({
      type: 'input',
      name: 'github',
      message: "What is the Engineer's GitHub username?",
      validate: (input) => input ? true : 'GitHub username cannot be empty.',
    });
  } else if (type === 'intern') {
    questions.push({
      type: 'input',
      name: 'school',
      message: "What is the Intern's school name?",
      validate: (input) => input ? true : 'School name cannot be empty.',
    });
  }
  if (type === 'manager') {
    questions.push({
      type: 'input',
      name: 'officeNumber',
      message: "What is the office number?",
      validate: (input) => input ? true : 'Office number cannot be empty.',
    });
  }