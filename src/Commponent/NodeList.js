
import React from 'react';
import EachNote from './EachNote';

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <EachNote key={index} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
