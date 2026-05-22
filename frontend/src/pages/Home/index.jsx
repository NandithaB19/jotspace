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
}) => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-stone-800 mb-6">
        Welcome to{" "}
        <span className="text-orange-500">
          JotSpace
        </span>
      </h1>

      <NoteForm addNote={addNote} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {notes
          .filter(
            (note) =>
              !note.isArchived
          )
          .map((note) => (
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
              deleteNote={deleteNote}
            />
          ))}
      </div>
    </Layout>
  );
};