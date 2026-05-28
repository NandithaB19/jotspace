import { useEffect, useState } from "react";

export const NoteForm = ({
  addNote,
  editingNote,
  updateNote,
}) => {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(
        editingNote.description
      );
    }
  }, [editingNote]);

  const handleSubmit = () => {
    if (
      !title.trim() ||
      !description.trim()
    ) {
      return;
    }

    if (editingNote) {
      updateNote(
        editingNote.id,
        title,
        description
      );
    } else {
      const newNote = {
        id: Date.now(),
        title,
        description,
        isPinned: false,
        isImportant: false,
        isArchived: false,
      };

      addNote(newNote);
    }

    setTitle("");
    setDescription("");
  };

  const handleKeyDown = (
    e
  ) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-stone-100 border border-stone-200 rounded-2xl p-5 shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-stone-800 mb-4">
        {editingNote
          ? "Edit Note"
          : "Create Note"}
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter note title..."
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white outline-none focus:ring-2 focus:ring-orange-400"
        />

        <textarea
          rows="4"
          placeholder="Write your note here..."
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          onKeyDown={
            handleKeyDown
          }
          className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white outline-none resize-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-3 rounded-xl transition-all duration-300 self-end"
        >
          {editingNote
            ? "Update Note"
            : "Add Note"}
        </button>
      </div>
    </div>
  );
};