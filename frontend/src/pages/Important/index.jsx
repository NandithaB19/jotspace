import { Layout } from "../../components/Layout";
import { NoteCard } from "../../components/NoteCard";

export const Important = ({
  notes,
  togglePin,
  toggleImportant,
  toggleArchive,
  deleteNote,
  editNote,
}) => {
  const importantNotes =
    notes.filter(
      (note) =>
        note.isImportant &&
        !note.isArchived
    );

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-stone-800 mb-6">
        Important Notes
      </h1>

      {importantNotes.length ===
      0 ? (
        <div className="bg-stone-100 border border-stone-200 rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-stone-700">
            No important notes
          </h2>

          <p className="text-stone-500 mt-2">
            Mark notes important to
            see them here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {importantNotes.map(
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