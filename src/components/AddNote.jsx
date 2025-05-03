import { useState } from "react";

function AddNote({ addNote }) {
  const [noteText, setNoteText] = useState("");

  const handleAddClick = () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: noteText,
      };
      addNote(newNote);
      setNoteText("");
    }
  };

  return (
    <div className="add-note">
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Scrie o notita..."
        rows="4"
      ></textarea>
      <button onClick={handleAddClick}>Adauga Notita</button>
    </div>
  );
}
export default AddNote;
