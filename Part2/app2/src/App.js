import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Note from './components/Note';

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])

  const newNoteChange = (event) => {
    setNewNote(event.target.value)
    console.log(event.target.value);
  }

  const addNewNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response);
      })
  }

  return (
    <div>
      <h2>Notes</h2>
      <div>
        <input value={newNote} onChange={newNoteChange}/>
        <button onClick={addNewNote}>Add</button>
      </div>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
