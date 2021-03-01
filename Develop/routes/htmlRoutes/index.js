const router = require('express').Router();
const path = require('path');

// paths to public html files
const pathOfIndexHtmlFile = path.join(__dirname, '../../public/index.html');
const pathOfNotesHtmlFile = path.join(__dirname, '../../public/notes.html');

router.get('/', (req , res) => res.sendFile(pathOfIndexHtmlFile));

router.get('/notes', (req, res) => res.sendFile(pathOfNotesHtmlFile));

router.get('*', (req , res) => res.sendFile(pathOfIndexHtmlFile))

module.exports = router;