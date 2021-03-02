const router = require('express').Router();
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    console.log(db.notes);
    console.log('api get notes');
    res.json(db.notes);
});

router.post('/notes', (req, res) => {
    console.log('api post note');
    console.log(JSON.stringify(req.body));

    // add to db.json
});

router.delete('/notes', (req, res) => {
    console.log('api delete note');
    console.log(JSON.stringify(req.params));
});


module.exports = router;