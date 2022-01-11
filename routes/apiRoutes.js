const router = require("express").Router();
const { createNote, validateNote, deleteNote } = require("../util/notes");

const { db } = require("../db/db.json");

//GET all notes
router.get("/notes", (req, res) => {
  res.json(db);
});

// create a new note
router.post("/notes", (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send("Please use correct format.");
  } else {
    const note = createNote(req.body, db);
    res.json(note);
  }
});

//delete note by id
router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id, db);
  res.json(true);
});

module.exports = router;
