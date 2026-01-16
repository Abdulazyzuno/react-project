import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./containers/App.jsx";
import { BrowserRouter } from "react-router";
import { GlobalStyle } from "./styles/global.js";
import { TestContext } from "./context/test.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <TestContext.Provider value={"Testing"}>
    <BrowserRouter>
    <GlobalStyle/>
      <App />
    </BrowserRouter>
    </TestContext.Provider>

);
