// const Manger = require("./lib/manager");
const inquirer = require("inquirer");

const checkRole = () => {
  console.log("Welcome to the Team Profile Generator");
  inquirer
    .prompt({
      type: "checkbox",
      name: "role",
      message: "Please select employee role (required)",
      choices: ["manager", "engineer", "employee", "intern"],
      validate(answer) {
        if (answer != "") {
          return true;
        } else {
          console.log("Please choose a role!");
          return false;
        }
      },
    })
    .then((answer) => {
      console.log(answer);
    });
};

/* if role then promptUser answers to new whatever that role is? */
const promptUser = () => {
  inquirer.prompt([
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
      type: "input",
      name: "phone",
      message: "Office Number?",
    },
  ]);
};

checkRole();
/* then promptUser */

/* team manager */

/* then engineer or intern option menu */

/* then write to page */
