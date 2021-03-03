const dataStore = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const dataLocation = path.join(__dirname, '../db/db.json');
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

    static class DbManager {
    #dataLocation;
    #dataStore;

    constructor() {
        this.#dataLocation = path.join(__dirname, '../db/db.json');
        this.#dataStore = require('../db/db.json');
        
    }

    addRecord(note) {
        note.id = this.#dataStore.nextNewId;
        this.#dataLocation.nextNewId++;
        this.#dataStore.noteList
        fs.writeFile(
            this.dataLocation, 
            JSON.stringify(this.#dataStore, null, 2)
        );
        return this.getAllRecords();
    }
    
    deleteRecord(id);
    
    getAllRecords() {
        return this.#dataStore.noteList;
    }
}

module.exports = DbManager;
