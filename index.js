// Dependencies
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const writeHTML = require("./utils/writeHTML");

const teams = [];

// Question Arrays
const addAnother = {
  type: "confirm",
  name: "addAnother",
  message: "Would you like to add another team member or finish building?",
};

const roleQuestion = {
  type: "list",
  name: "role",
  message: "Employee role (required):",
  choices: ["Engineer", "Intern"],
};

const questions = [
  {
    type: "input",
    name: "name",
    message: "Name (required):",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
];

//Add another employee check or generate HTML
const checkAddAnother = () => {
  inquirer.prompt(addAnother).then((answer) => {
    if (answer.addAnother != true) {
      console.log("write HTML");
      writeHTML(teams);
    } else {
      addEmployee();
    }
  });
};

// Initialize builder and Manager
const addManager = () => {
  var phone = {
    type: "input",
    name: "phone",
    message: "Office phone number?",
  };
  const managerQuestions = [...questions];
  managerQuestions.push(phone);

  console.log(
    "Welcome to the Team Profile Generator! \nWho is the Team Manager?"
  );
  inquirer
    .prompt(managerQuestions)
    .then((managerInfo) => {
      const newManager = new Manager(
        managerInfo.name,
        managerInfo.id,
        managerInfo.email,
        managerInfo.phone
      );
      teams.push(newManager);
      checkAddAnother();
    })
};

//Engineer
const addEngineer = (employeeInfo) => {
  inquirer
    .prompt({
      type: "input",
      name: "github",
      message: "GitHub username?",
    })
    .then((engineerInfo) => {
      const newEngineer = new Engineer(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        engineerInfo.github
      );
      teams.push(newEngineer);
      checkAddAnother();
    });
};

//Intern
const addIntern = (employeeInfo) => {
  inquirer
    .prompt({
      type: "input",
      name: "school",
      message: "School?",
    })
    .then((internInfo) => {
      const newIntern = new Intern(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        internInfo.school
      );
      teams.push(newIntern);
      checkAddAnother();
    });
};

// Employee and Role Check
const addEmployee = () => {
  let employeeQuestions = [...questions];
  employeeQuestions.push(roleQuestion);

  inquirer.prompt(employeeQuestions).then((employeeInfo) => {
    if (employeeInfo.role === "Engineer") {
      addEngineer(employeeInfo);
    } else {
      addIntern(employeeInfo);
    }
  });
};

addManager();