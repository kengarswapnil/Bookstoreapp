import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";  // ✅ Import the provider

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <AuthProvider>
  <App/>
   </AuthProvider>
  </BrowserRouter>
);
