const dataStore = require('../db/db.json');
const path = require('path');
const dataLocation = path
const noteList = dataStore.notes;
//const fs = require('fs').
// const nextNewId = dataStore.nextNewId;

/*
    get data from file
    keep data in memory
        onGet 
            return data from memory
        onPost
            get nextNewId
            add to nextNewId as id number
            add modified note data to in memory db representation
            append as new line to a log file
            every 10 adds to the log add pending changes to the main storage file -fs will rewrite whole file
        onDelete alter variable in memory
            then trigger file save every so often
*/

function addRecord(note) {
    let nextNewId = dataStore.nextNewId;
    f
}

function deleteRecord(id);

function getAllRecords() {

}