import { useState } from "react";
import { Layout } from "../../components/Layout";
import { NoteCard } from "../../components/NoteCard";
import { NoteForm } from "../../components/NoteForm";

export const Home = ({
  notes,
  addNote,
  togglePin,
  toggleImportant,
  toggleArchive,
  deleteNote,
  editingNote,
  editNote,
  updateNote,
}) => {
  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredNotes = notes
    .filter(
      (note) =>
        !note.isArchived
    )
    .filter((note) =>
      note.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||
      note.description
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  return (
    <Layout
  searchTerm={searchTerm}
  setSearchTerm={
    setSearchTerm
  }
>
      <h1 className="text-3xl font-semibold text-stone-800 mb-6">
        Welcome to{" "}
        <span className="text-orange-500">
          JotSpace
        </span>
      </h1>

    {!searchTerm && (
  <NoteForm
    addNote={addNote}
    editingNote={editingNote}
    updateNote={updateNote}
  />
)}

      {filteredNotes.length ===
      0 ? (
        <div className="bg-stone-100 border border-stone-200 rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-stone-700">
            No matching notes found
          </h2>

          <p className="text-stone-500 mt-2">
            Try a different keyword.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotes.map(
            (note) => (
              <NoteCard
                key={note.id}
                note={note}
                togglePin={
                  togglePin
                }
                toggleImportant={
                  toggleImportant
                }
                toggleArchive={
                  toggleArchive
                }
                deleteNote={
                  deleteNote
                }
                editNote={
                  editNote
                }
              />
            )
          )}
        </div>
      )}
    </Layout>
  );
};