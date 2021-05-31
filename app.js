const yargs = require('yargs');
const chalk = require('chalk');
const util = require('./util.js');
yargs.command({
    command: 'addNote',
    builder: {
        name: {
            demandOption: true,
            type: 'string'
        },

        content: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.red('Processing . . .\n'));
        util.add(argv.name, argv.content);
    }
});
yargs.command({
    command: 'deleteNote',
    builder: {
        name: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.red('Processing . . .\n'));
        util.Delete(argv.name);
    }
});
yargs.command({
    command: "listNotes",
    handler: () => {
        console.log(chalk.yellow('Your notes :-\n'));
        util.list();
    }
});
yargs.command({
    command: 'read',
    builder: {
        name: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => util.read(argv.name)
})
yargs.parse();