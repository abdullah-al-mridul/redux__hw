import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./features/store.js";
import { Provider as Redux } from "react-redux";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Redux store={store}>
      <App />
    </Redux>
  </StrictMode>
);
