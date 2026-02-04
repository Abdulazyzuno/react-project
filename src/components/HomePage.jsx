import React, { useContext } from "react";
import { TestContext } from "../context/test";
import { Search } from "./Search";
import ContextExample from "./ContextExample";
import ReducerExample from "./ReducerExample";

function Component1() {
  const color = useContext(TestContext);
  return <div>{color}</div>;
}
function Component2() {
  return <Component1 />;
}
export default function HomePage() {
  const text = "red";
  return (
    <>
      {/* HomePage */}
      <Search />
      <ContextExample/>
      <ReducerExample/>
      {/* <Component2 /> */}
    </>
  );
}
