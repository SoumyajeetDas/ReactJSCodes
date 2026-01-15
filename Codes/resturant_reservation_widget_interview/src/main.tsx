import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BookingProvider } from "./BookingContext";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element with id 'root' not found");

createRoot(rootElement).render(
  <StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </StrictMode>
);
