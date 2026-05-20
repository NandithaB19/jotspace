import logo from "../../assets/notesapp.png";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-stone-100 border-b border-stone-200 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="JotSpace Logo"
          className="w-10 h-10 object-contain"
        />

        <h1 className="text-2xl font-bold text-orange-600">
          JotSpace
        </h1>
      </div>
    </header>
  );
};