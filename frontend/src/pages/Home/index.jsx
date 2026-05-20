import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-semibold text-stone-800">
            Welcome to{" "}
            <span className="text-orange-500">
              JotSpace
            </span>
          </h1>

          <p className="mt-2 text-stone-600">
            Capture your thoughts, organize notes,
            and stay productive.
          </p>
        </main>
      </div>
    </div>
  );
};