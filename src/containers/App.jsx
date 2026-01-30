import { Route, Routes } from "react-router";
import HomePage from "../components/HomePage";
import { Search } from "../components/Search";
import MyForm from "../components/Form";
import UserCards from "../components/UserCards";
import { InfoContext } from "../context/test2";
// import { useEffect, useState } from "react";

function App() {
  // const [value, setValue] = useState("I am dark");
  // useEffect(() => {
  //   const handleUpdate = () => {
  //     setValue("I am fair");
  //   };
  //   return handleUpdate
  // }, []);
  return (
    <InfoContext.Provider value={"I am dark"}>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="form" element={<MyForm />} />
        <Route path="search" element={<Search />} />
        <Route path="user" element={<UserCards />} />
      </Routes>
    </InfoContext.Provider>
  );
}
export default App;
