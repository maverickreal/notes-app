const fs = require('fs');
const chalk = require('chalk');
const add = (name, content) => {
    try {
        const jcode = JSON.parse(fs.readFileSync('db/sidenote.json').toString());
        var fl = jcode.find((item) => item.name == name);
        if (!fl) {
            jcode.push({ name: name, age: content });
            const str = JSON.stringify(jcode);
            //console.log(str);
            fs.writeFileSync('db/sidenote.json', str);
            console.log(chalk.blue('Done!'));
        }
        else {
            console.log(chalk.yellow('Entry already exists!\n'));
        }
    }
    catch (e) {
        console.log(chalk.yellow('File error!\n'));
    }
};
const Delete = (name) => {
    const jcode = JSON.parse(fs.readFileSync('db/sidenote.json').toString());
    // console.log(jcode);
    for (x in jcode) {
        if (jcode[x] != null && jcode[x].name == name) {
            delete jcode[x];
            console.log(chalk.blue('Found!'));
            break;
        }
    }
    //const str = JSON.stringify(jcode);
    fs.writeFileSync('db/sidenote.json', JSON.stringify(jcode));
    console.log(chalk.yellow('Completed!'));
}
const list = () => {
    const jcode = JSON.parse(fs.readFileSync('db/sidenote.json').toString());
    for (x in jcode) {
        //console.log(jcode[x]);
        console.log(chalk.blue('\n' + (x + 1) + '.  ' + jcode[x].name + ' :\n       ' + jcode[x].age));
    }
}
const read = (name) => {
    const jcode = JSON.parse(fs.readFileSync('db/sidenote.json').toString());
    for (x in jcode) {
        if (jcode[x].name == name) {
            console.log(chalk.green(jcode[x].age));
            return;
        }
    }
    console.log(chalk.red('Error : Note not found!'));
}
module.exports = {
    Delete: Delete,
    add: add,
    list: list,
    read: read
}