import { NavLink } from "react-router-dom";
import {
  MdHome,
  MdArchive,
  MdPushPin,
  MdStar,
} from "react-icons/md";

export const Sidebar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <MdHome size={22} />,
    },
    {
      name: "Archive",
      path: "/archive",
      icon: <MdArchive size={22} />,
    },
    {
      name: "Important",
      path: "/important",
      icon: <MdStar size={22} />,
    },
    {
      name: "Pinned",
      path: "/pinned",
      icon: <MdPushPin size={22} />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-stone-100 border-r border-stone-200 p-4">
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-stone-700 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
          >
            {item.icon}
            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};