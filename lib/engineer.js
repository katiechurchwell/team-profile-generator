/* same prompts but also github username */
class Engineer {
  constructor(name, id, email, number, github, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
    this.github = github;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getOfficeNumber() {
    return this.number;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
