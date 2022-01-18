const Engineer = require("../lib/engineer.js");

test("Engineer name working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.name).toEqual("name");
});

test("Engineer id working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.id).toEqual("id");
});

test("Engineer email working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.email).toEqual("email");
});

test("getName() working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.getName()).toEqual("name");
});

test("getId() working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.getId()).toEqual("id");
});

test("getEmail() working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.getEmail()).toEqual("email");
});

test("getRole() working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.getRole()).toEqual("Engineer");
});

test("getGitHub() working?", () => {
  const engineer = new Engineer("name", "id", "email", "github");
  expect(engineer.getGitHub()).toEqual("github");
});
