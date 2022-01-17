class Manager {
  constructor(role, name, id, email, phone) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = phone;
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

module.exports = Manager;
