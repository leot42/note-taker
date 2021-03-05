const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const dataStore = require('../../db/db.json');
const dataLocation = path.join(__dirname, '../../db/db.json');

router.delete('/notes/:id', (req, res) => {
    console.log(`api delete notes where id = ${JSON.stringify(req.params.id)}`);
    let noteArr = dataStore.db.notes;
    // console.log(`noteArr intialized to = ${JSON.stringify(noteArr)}`);
    // filter out id of x 
    let tempNoteArrayWithIdXRemoved = noteArr.filter((note) => {
   
        if (note.id != Number(req.params.id)) return note;
     });

     dataStore.db.notes = tempNoteArrayWithIdXRemoved;
            // console.log(` map note check ${JSON.stringify(note)}`);
    // } )
    console.log(` filtered id check ${JSON.stringify(dataStore)}`);

    saveBackToJsonFile();

    res.send(200);
});

router.get('/notes', (req, res) => {
    //  console.log(`api get notes ${JSON.stringify(dataStore.db.notes)}`);
    res.json(dataStore.db.notes);
});

router.post('/notes', (req, res) => {
//    console.log(`api post notes ${dataStore.db.notes}`);
    // console.log(` post ${JSON.stringify(dataStore, null, 2)}`);
    req.body.id = dataStore.db.nextNewId;


    dataStore.db.nextNewId++;
    console.log(JSON.stringify(req.body));
    dataStore.db.notes.push(req.body);
    saveBackToJsonFile();
    res.json(dataStore.db.notes);
});

function saveBackToJsonFile () {
    fs.writeFileSync(
        dataLocation,
        JSON.stringify(dataStore, null, 2));
}

module.exports = router;