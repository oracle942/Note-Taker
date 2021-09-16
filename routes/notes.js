const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving the notes

notes.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting notes
notes.post('/notes', (req, res) => {
  console.info(`${req.method} request received to save notes`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title) {
    // Variable for the object we will save
    const newNote = {
      title, 
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});

module.exports = notes;
