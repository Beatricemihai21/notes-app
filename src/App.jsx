import React, { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Aplicatie de Notite</h1>
      <AddNote addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
export default App;
