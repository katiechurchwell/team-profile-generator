/* same prompts but also github username */
class Engineer {
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
