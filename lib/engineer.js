/* same prompts but also github username */
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super();

    this.github = github;
    this.role = "Engineer";
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
