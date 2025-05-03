function NotesList({ notes, deleteNote }) {
  if (!notes) {
    return <p>Nu ai nici o notiță. Adaugă una!</p>;
  }
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <button onClick={() => deleteNote(note.id)}>Sterge</button>
          </div>
        ))
      ) : (
        <p>Nu ai nici o notita. Adauga una!</p>
      )}
    </div>
  );
}

export default NotesList;
