const router = require('express').Router();


router.get('/notes', (req, res) => {
    console.log('api get notes');
});

router.post('/notes', (req, res) => {
    console.log('api post note');
});

router.delete('/notes:id', (req, res) => {
    console.log('api delete note');
});


module.exports = router;