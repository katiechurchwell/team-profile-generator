const fs = require("fs");
const path = require("path");

const writeHTML = (teams) => {
  //build cards
  let cardsStr = "";
  teams.forEach((member) => {
    switch (member.role) {
      case "Intern":
        // build card here
        cardsStr += `
            <div>
            <ul>
                <li>${member.name}</li>
                <li>${member.role}</li>
                <li>${member.id}</li>
                <li><a href="mailto:${member.email}">${member.email}</a></li>
                <li>${member.school}</li>
            </ul>
                <div>
        `;
        break;
      case "Manager":
        // build card here
        cardsStr += `
            <div>
            <ul>
                <li>${member.name}</li>
                <li>${member.role}</li>
                <li>${member.id}</li>
                <li><a href="mailto:${member.email}">${member.email}</a></li>
                <li>${member.number}</li>
            </ul>
            <div>
        `;
        break;
      case "Engineer":
        // build card here
        cardsStr += `
        <div>
        <ul>
            <li>${member.name}</li>
            <li>${member.role}</li>
            <li>${member.id}</li>
            <li><a href="mailto:${member.email}">${member.email}</a></li>
            <li>${member.github}</li>
        </ul>
        <div>
        `;
        break;
      default:
        break;
    }
  });

  //add card to template
  const template = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        ${cardsStr}
    </body>
    </html>
  `;

  //write to html and create html if it does not exist
  fs.writeFile(
    path.join(__dirname, "../output/teams.html"),
    template,
    "utf8",
    () => {
      console.log("done!!");
    }
  );
};

module.exports = writeHTML;
