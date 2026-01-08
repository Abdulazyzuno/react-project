import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./containers/App.jsx";
import { BrowserRouter } from "react-router";
import { GlobalStyle } from "./styles/global.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <GlobalStyle/>
      <App />
    </BrowserRouter>
);
