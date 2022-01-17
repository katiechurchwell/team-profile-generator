/* same prompts but also github username */
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
    this.role = "Engineer";
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
