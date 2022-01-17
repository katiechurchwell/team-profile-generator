/* same prompts but also github username */
class Engineer {
  constructor(name, id, email, number, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
    this.github = github;
    this.role = "Engineer";
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

  getGitHub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
