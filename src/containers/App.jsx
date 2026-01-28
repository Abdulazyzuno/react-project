import { Route, Routes } from "react-router";
import HomePage from "../components/HomePage";
import { Search } from "../components/Search";
import MyForm from "../components/Form";
import UserCards from "../components/UserCards";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="form" element={<MyForm />} />
      <Route path="search" element={<Search />} />
      <Route path="user" element={<UserCards />} />
    </Routes>
  );
}
export default App;
