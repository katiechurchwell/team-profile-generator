const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Employee name? (required)",
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
        message: "Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Email?",
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((managerInfo) => {
      new Employee(
        managerInfo.name,
        managerInfo.id,
        managerInfo.email,
        managerInfo.phone
      );
      if (managerInfo.addAnother) {
        return addAnother();
      } /* else write to HTML*/
    });
};

const addAnother = () => {
  /* menu displaying choices */
};

addEmployee();

/* Manger > menu to add engineer or intern (how does employee class play into this?)*/
/* then write html */
