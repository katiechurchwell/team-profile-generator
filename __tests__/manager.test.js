const Manager = require("../lib/Manager.js");

test("Manager name working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.name).toEqual("name");
});

test("Manager id working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.id).toEqual("id");
});

test("Manager email working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.email).toEqual("email");
});

test("getName() working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.getName()).toEqual("name");
});

test("getId() working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.getId()).toEqual("id");
});

test("getEmail() working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.getEmail()).toEqual("email");
});

test("getRole() working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.getRole()).toEqual("Manager");
});

test("getOfficeNumber() working?", () => {
  const manager = new Manager("name", "id", "email", "number");
  expect(manager.getOfficeNumber()).toEqual("number");
});
