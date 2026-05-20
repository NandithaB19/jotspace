import {
  MdPushPin,
  MdArchive,
  MdStar,
} from "react-icons/md";

export const NoteCard = ({ note }) => {
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

        <button className="text-stone-500 hover:text-orange-500 transition">
          <MdPushPin size={22} />
        </button>
      </div>

      <div className="flex items-center justify-end gap-4 mt-5">

        <button className="text-stone-500 hover:text-orange-500 transition">
          <MdStar size={22} />
        </button>

        <button className="text-stone-500 hover:text-orange-500 transition">
          <MdArchive size={22} />
        </button>

      </div>
    </div>
  );
};