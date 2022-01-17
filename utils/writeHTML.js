const fs = require('fs');
const path = require('path');

const writeHTML = (teams) => {
    //build cards
  let cardsStr = "";
  teams.forEach((member) => {
    switch (member.role) {
      case "Intern":
        // build card here
        cardsStr += `
            <div>
                ${member.school}
            <div>
        `;
        break;
      case "Manager":
        // build card here
        cardsStr += `
            <div>
                ${member.number}
            <div>
        `;
        break;
      case "Engineer":
        // build card here
        cardsStr += `
            <div>
                ${member.github}
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
        <title>Document</title>
    </head>
    <body>
        ${cardsStr}
    </body>
    </html>
  `;

  //write to html and create html if it does not exist
  fs.writeFile(path.join(__dirname,"../output/teams.html"), template, "utf8", () => {
    console.log("done!!");
  })
};

module.exports = writeHTML;
