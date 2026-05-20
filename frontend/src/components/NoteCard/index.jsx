import {
  MdPushPin,
  MdArchive,
  MdStar,
} from "react-icons/md";

export const NoteCard = ({
  note,
  togglePin,
  toggleImportant,
  toggleArchive,
}) => {
  return (
    <div className="bg-stone-100 border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-stone-800">
            {note.title}
          </h2>

          <p className="mt-2 text-stone-600">
            {note.description}
          </p>
        </div>

        <button
          onClick={() =>
            togglePin(note.id)
          }
          className={`transition ${
            note.isPinned
              ? "text-orange-500"
              : "text-stone-500 hover:text-orange-500"
          }`}
        >
          <MdPushPin size={22} />
        </button>
      </div>

      <div className="flex items-center justify-end gap-4 mt-5">
        <button
          onClick={() =>
            toggleImportant(note.id)
          }
          className={`transition ${
            note.isImportant
              ? "text-orange-500"
              : "text-stone-500 hover:text-orange-500"
          }`}
        >
          <MdStar size={22} />
        </button>

        <button
          onClick={() =>
            toggleArchive(note.id)
          }
          className={`transition ${
            note.isArchived
              ? "text-orange-500"
              : "text-stone-500 hover:text-orange-500"
          }`}
        >
          <MdArchive size={22} />
        </button>
      </div>
    </div>
  );
};