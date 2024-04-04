const validator = require('validator');
const fs = require('fs');
const chk = require('chalk');
const yargs = require('yargs');
const name = require('./utils');
const {getNotes, addNote,readNote,removeNote} = require('./notes');
yargs.version('1.1.0');
yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ',argv.title);
        console.log('Body: ',argv.body);

        addNote(argv.title,argv.body);
    }
});
yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        removeNote(argv.title);
    }
});
yargs.command ({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        getNotes();
    }
});
yargs.command ({
    command: 'read',
    describe: 'read your note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        readNote(argv.title);
    }
});

//const file_name = 'notes.txt';
//fs.writeFileSync(file_name,'This file was created by Node.js');
//fs.appendFileSync(file_name,'. New line added.');
//console.log(validator.isEmail('gmail.com'));
//const styledMessage = chk.green.bold.inverse('Success!'); 
//console.log(styledMessage);
//console.log(process.argv);
console.log(yargs.argv);


