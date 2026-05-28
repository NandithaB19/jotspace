import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "16px",
            background: "#f5f5f4",
            color: "#1c1917",
            border:
              "1px solid #d6d3d1",
          },
        }}
      />

      <App />
    </BrowserRouter>
  </React.StrictMode>
);