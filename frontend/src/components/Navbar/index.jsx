import logo from "../../assets/notesapp.png";
import { MdSearch } from "react-icons/md";

export const Navbar = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-100/90 backdrop-blur-md border-b border-stone-200 px-8 py-4 shadow-sm">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10"
          />

          <h1 className="text-2xl font-bold text-stone-800">
            Jot
            <span className="text-orange-500">
              Space
            </span>
          </h1>
        </div>

        {/* Search */}
        <div className="relative w-[280px]">
          <MdSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          />

          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all text-stone-700 placeholder:text-stone-400 shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};