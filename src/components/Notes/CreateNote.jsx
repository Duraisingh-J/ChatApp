// src/components/Notes/CreateNote.js

import React, { useState } from 'react';
import axios from 'axios';


function CreateNote({ onNoteAdded }) {
  const [noteText, setNoteText] = useState('');

  const handleInputChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!noteText.trim()) {
      return; // Prevent creating empty notes
    }

    try {
      const response = await axios.post('http://localhost:5000/api/notes', { text: noteText });
      onNoteAdded(response.data); // Callback to parent to add the new note
      setNoteText(''); // Clear the input after adding the note
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="create-note-container">
      <textarea
        className="note-input"
        value={noteText}
        onChange={handleInputChange}
        placeholder="Write your note..."
      />
      <button className="create-note-btn" onClick={handleSubmit}>Create Note</button>
    </div>
  );
}

export default CreateNote;
