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
    />
  }
/>
    </Routes>
  );
};