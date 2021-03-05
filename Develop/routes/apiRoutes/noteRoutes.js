const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const dataStore = require('../../db/db.json');
const dataLocation = path.join(__dirname, '../../db/db.json');

router.delete('/notes/:id', (req, res) => {
    console.log(`api delete notes ${JSON.stringify(req.params)}`);

    console.log(JSON.stringify(req.params));
    res.send(200);
});

router.get('/notes', (req, res) => {
    //   console.log(`api get notes ${db.notes}`);
    res.json(dataStore.db.notes);
});

router.post('/notes', (req, res) => {
  //  console.log(`api post notes ${dataStore.db.notes}`);

    req.body.id = dataStore.db.nextNewId;
    dataStore.db.nextNewId++;
    console.log(JSON.stringify(req.body));
    dataStore.db.notes.push(req.body);
    fs.writeFileSync(
        dataLocation,
        JSON.stringify({ dataStore }, null, 2));
    res.json(dataStore.db.notes);
});



module.exports = router;