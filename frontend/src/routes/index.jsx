import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Archive } from "../pages/Archive";
import { Important } from "../pages/Important";
import { Pinned } from "../pages/Pinned";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/important" element={<Important />} />
      <Route path="/pinned" element={<Pinned />} />
    </Routes>
  );
};