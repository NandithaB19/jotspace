import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppRoutes } from "./routes";

function App() {
  const [notes, setNotes] =
    useState(() => {
      const savedNotes =
        localStorage.getItem(
          "jotspace-notes"
        );

      return savedNotes
        ? JSON.parse(savedNotes)
        : [];
    });

  const [
    editingNote,
    setEditingNote,
  ] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "jotspace-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (
    newNote
  ) => {
    setNotes((prevNotes) => [
      newNote,
      ...prevNotes,
    ]);

    toast.success(
      "Note created"
    );
  };

  const togglePin = (
    id
  ) => {
    const note = notes.find(
      (note) => note.id === id
    );

    const isPinning =
      !note?.isPinned;

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              isPinned:
                !note.isPinned,
            }
          : note
      )
    );

    toast.success(
      isPinning
        ? "Note pinned"
        : "Note unpinned"
    );
  };

  const toggleImportant = (
    id
  ) => {
    const note = notes.find(
      (note) => note.id === id
    );

    const isMarking =
      !note?.isImportant;

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

    toast.success(
      isMarking
        ? "Marked important"
        : "Removed from important"
    );
  };

  const toggleArchive = (
    id
  ) => {
    const note = notes.find(
      (note) => note.id === id
    );

    const isArchiving =
      !note?.isArchived;

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

    toast.success(
      isArchiving
        ? "Note archived"
        : "Note unarchived"
    );
  };

  const deleteNote = (
    id
  ) => {
    setNotes((prevNotes) =>
      prevNotes.filter(
        (note) =>
          note.id !== id
      )
    );

    toast.success(
      "Note deleted"
    );
  };

  const editNote = (
    note
  ) => {
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
              title:
                updatedTitle,
              description:
                updatedDescription,
            }
          : note
      )
    );

    setEditingNote(null);

    toast.success(
      "Note updated"
    );
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
      deleteNote={
        deleteNote
      }
      editingNote={
        editingNote
      }
      editNote={editNote}
      updateNote={
        updateNote
      }
    />
  );
}

export default App;