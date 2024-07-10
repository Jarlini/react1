

import React, { useState } from 'react';
import NoteForm from './NodeForm';
import NoteList from './NodeList';
const Note = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default Note;

