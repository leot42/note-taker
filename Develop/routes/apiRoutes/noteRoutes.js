const router = require('express').Router();
const db = require('../../db/db.json');

router.delete('/notes/:id', (req, res) => {
    console.log(`api delete notes ${JSON.stringify(req.params)}`);

   console.log(JSON.stringify(req.params));
   res.send(200);
});

router.get('/notes', (req, res) => {
 //   console.log(`api get notes ${db.notes}`);
    res.json(db.notes);
});

router.post('/notes', (req, res) => {
    console.log(`api post notes ${db.notes}`);
    console.log(JSON.stringify(req.body));

    // add to db.json
});



module.exports = router;