const fs = require("fs");
const path = require("path");
// need unique id
const { v4: uuidv4 } = require("uuid");

// Function to create a new note
function createNote(body, notesArray) {
  const note = body;

  note.id = uuidv4();

  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ db: notesArray }, null, 2)
  );

  return note;
}

// function to validate if the note is a string
function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}

function deleteNote(id, notesArray) {
  for (let i = 0; i < notesArray.length; i++) {
    let note = notesArray[i];

    if (note.id == id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ db: notesArray }, null, 2)
      );

      break;
    }
  }
}

module.exports = {
  createNote,
  validateNote,
  deleteNote,
};
