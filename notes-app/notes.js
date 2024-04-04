const fs = require('fs');
const getNotes = function() {
    var notes = loadNotes();
    console.log(notes);
};
const addNote = function(title,body) {
    console.log("inside add-note function");
    var notes = loadNotes();
    const duplicateTitle = notes.filter((note)=> note.title==title);
    if(duplicateTitle.length >0){
        console.log("note title taken");
        return;
    }
    notes.push({
        title,body
    })
    console.log("note added");
    saveNotes(notes);
    console.log(notes);
};

const removeNote = function(title){
    var notes = loadNotes();
    const filteredNotes = notes.filter((note)=> note.title!=title);
    
    if(notes.length==filteredNotes.length)
        console.log('title not found');
    else{
        saveNotes(filteredNotes);
        console.log('note removed');
    }
}
const readNote = function(title){
    var notes = loadNotes();
    const filteredNote = notes.filter((note)=> note.title==title);
    if(filteredNote.length==0)
        console.log("note with given title not found");
    else{
        console.log(filteredNote[0].body);
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notesData.json',dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notesData.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    readNote,
    removeNote
}