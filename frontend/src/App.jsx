import { useEffect, useState } from "react";
import { AppRoutes } from "./routes";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes =
      localStorage.getItem("jotspace-notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];
  });
const [editingNote, setEditingNote] =
    useState(null);
  useEffect(() => {
    localStorage.setItem(
      "jotspace-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [
      newNote,
      ...prevNotes,
    ]);
  };

  const togglePin = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              isPinned: !note.isPinned,
            }
          : note
      )
    );
  };

  const toggleImportant = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              isImportant:
                !note.isImportant,
            }
          : note
      )
    );
  };

  const toggleArchive = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              isArchived:
                !note.isArchived,
            }
          : note
      )
    );
  };
  const deleteNote = (id) => {
  setNotes((prevNotes) =>
    prevNotes.filter(
      (note) => note.id !== id
    )
  );
};
const editNote = (note) => {
  setEditingNote(note);
};
const updateNote = (
  id,
  updatedTitle,
  updatedDescription
) => {
  setNotes((prevNotes) =>
    prevNotes.map((note) =>
      note.id === id
        ? {
            ...note,
            title: updatedTitle,
            description:
              updatedDescription,
          }
        : note
    )
  );

  setEditingNote(null);
};

  return (
    <AppRoutes
  notes={notes}
  addNote={addNote}
  togglePin={togglePin}
  toggleImportant={
    toggleImportant
  }
  toggleArchive={
    toggleArchive
  }
  deleteNote={deleteNote}
  editingNote={editingNote}
editNote={editNote}
updateNote={updateNote}
/>
  );
}

export default App;