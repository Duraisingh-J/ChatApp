// src/components/Notes/Notes.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import NoteItem from './NoteItem';


function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from the backend API
    axios.get('http://localhost:5000/api/notes')
      .then((response) => setNotes(response.data))
      .catch((error) => console.error('Error fetching notes:', error));
  }, []);

  const handleNoteAdded = (newNote) => {
    setNotes([...notes, newNote]); // Add new note to the list
  };

  return (
    <div className="notes-container">
      <h3>Your Notes</h3>
      <CreateNote onNoteAdded={handleNoteAdded} /> {/* Pass callback to CreateNote */}
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} /> // Render each note
        ))}
      </div>
    </div>
  );
}

export default Notes;
