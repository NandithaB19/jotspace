import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";

export const Layout = ({
  children,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={
          setSearchTerm
        }
      />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};