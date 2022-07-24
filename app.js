//receives written html file
const fs = require('fs');

//receives page-template
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;


//writes html to file
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});





