//receives inquirer file
const inquirer = require('inquirer');

// question and text input answer
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your name?"
        }
    ])

    .then(answers => console.log(answers));
//receives written html file
// const fs = require('fs');

// //receives page-template
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);


// //writes html to file
// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });





