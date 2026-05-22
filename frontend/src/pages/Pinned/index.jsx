import { Layout } from "../../components/Layout";
import { NoteCard } from "../../components/NoteCard";

export const Pinned = ({
  notes,
  togglePin,
  toggleImportant,
  toggleArchive,
}) => {
  const pinnedNotes = notes.filter(
    (note) =>
      note.isPinned &&
      !note.isArchived
  );

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-stone-800 mb-6">
        Pinned Notes
      </h1>

      {pinnedNotes.length === 0 ? (
        <p className="text-stone-500">
          No pinned notes yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pinnedNotes.map((note) => (
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