import { Route, Routes } from "react-router";
import HomePage from "../components/HomePage";
import { MyForm } from "../components/Form";
import { Search } from "../components/Search";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="form" element={<MyForm />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
}
export default App;
