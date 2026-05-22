import { Layout } from "../../components/Layout";
import { NoteCard } from "../../components/NoteCard";

export const Important = ({
  notes,
  togglePin,
  toggleImportant,
  toggleArchive,
}) => {
  const importantNotes = notes.filter(
    (note) =>
      note.isImportant &&
      !note.isArchived
  );

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-stone-800 mb-6">
        Important Notes
      </h1>

      {importantNotes.length === 0 ? (
        <p className="text-stone-500">
          No important notes yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {importantNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              togglePin={togglePin}
              toggleImportant={
                toggleImportant
              }
              toggleArchive={
                toggleArchive
              }
            />
          ))}
        </div>
      )}
    </Layout>
  );
};