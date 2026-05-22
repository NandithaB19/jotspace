import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Archive } from "../pages/Archive";
import { Important } from "../pages/Important";
import { Pinned } from "../pages/Pinned";

export const AppRoutes = ({
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
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            notes={notes}
            addNote={addNote}
            togglePin={togglePin}
            toggleImportant={
              toggleImportant
            }
            toggleArchive={
              toggleArchive
            }
            deleteNote={deleteNote}
            editingNote={editingNote}
editNote={editNote}
updateNote={updateNote}
          />
        }
      />

      <Route
        path="/archive"
        element={
          <Archive
            notes={notes}
            togglePin={togglePin}
            toggleImportant={
              toggleImportant
            }
            toggleArchive={
              toggleArchive
            }
            deleteNote={deleteNote}
      editNote={editNote}
          />
        }
      />

      <Route
  path="/important"
  element={
    <Important
      notes={notes}
      togglePin={togglePin}
      toggleImportant={
        toggleImportant
      }
      toggleArchive={
        toggleArchive
      }
      deleteNote={deleteNote}
      editNote={editNote}
    />
  }
/>

      <Route
  path="/pinned"
  element={
    <Pinned
      notes={notes}
      togglePin={togglePin}
      toggleImportant={
        toggleImportant
      }
      toggleArchive={
        toggleArchive
      }
      deleteNote={deleteNote}
      editNote={editNote}
    />
  }
/>
    </Routes>
  );
};