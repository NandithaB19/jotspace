import { NavLink } from "react-router-dom";
import {
  MdHome,
  MdArchive,
  MdPushPin,
  MdStar,
} from "react-icons/md";

export const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-stone-100 border-r border-stone-200 p-4">
      <nav className="flex flex-col gap-3">

        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-700 hover:bg-orange-100 hover:text-orange-600"
        >
          <MdHome size={22} />
          <span className="font-medium">
            Home
          </span>
        </NavLink>

        <NavLink
          to="/archive"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-700 hover:bg-orange-100 hover:text-orange-600"
        >
          <MdArchive size={22} />
          <span className="font-medium">
            Archive
          </span>
        </NavLink>

        <NavLink
          to="/important"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-700 hover:bg-orange-100 hover:text-orange-600"
        >
          <MdStar size={22} />
          <span className="font-medium">
            Important
          </span>
        </NavLink>

        <NavLink
          to="/pinned"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-700 hover:bg-orange-100 hover:text-orange-600"
        >
          <MdPushPin size={22} />
          <span className="font-medium">
            Pinned
          </span>
        </NavLink>

      </nav>
    </aside>
  );
};