

const { filterByQuery,findById, deleteNote, createNewNote,validateNote } = require('../../lib/notes');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../data/db');


//Display notes from db
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

//route to create new notes
router.post('/notes', (req, res) => {
  req.body.id = uuidv4();

  if(!validateNote(req.body)){
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});


//delete a note
router.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id, notes);
  res.json(true);
});

module.exports = router;