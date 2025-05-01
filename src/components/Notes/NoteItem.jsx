// src/components/Notes/NoteItem.js

import React from 'react';


function NoteItem({ note }) {
  return (
    <div className="note-item">
      <p>{note.text}</p>
    </div>
  );
}

export default NoteItem;
