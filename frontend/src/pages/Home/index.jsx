import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { NoteCard } from "../../components/NoteCard";
import { NoteForm } from "../../components/NoteForm";

export const Home = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("jotspace-notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [
          {
            id: 1,
            title: "React Revision",
            description:
              "Revise hooks, props, state management, and React Router concepts.",
            isPinned: false,
            isImportant: false,
            isArchived: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("jotspace-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const togglePin = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              isPinned: !note.isPinned,
            }
          : note,
      ),
    );
  };
  const toggleImportant = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              isImportant: !note.isImportant,
            }
          : note,
      ),
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
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-stone-800 mb-6">
        Welcome to <span className="text-orange-500">JotSpace</span>
      </h1>

      <NoteForm addNote={addNote} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {notes
  .filter((note) => !note.isArchived)
  .map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            togglePin={togglePin}
            toggleImportant={toggleImportant}
            toggleArchive={toggleArchive}
          />
        ))}
      </div>
    </Layout>
  );
};
