import React, { useContext } from "react";
import { TestContext } from "../context/test";

function Component1() {
  const color = useContext(TestContext)
  return <div>{color}</div>;
}
function Component2() {
  return <Component1  />;
}
export default function HomePage() {
  const text = "red";
  return (
    <>
      HomePage
      <Component2 />
    </>
  );
}
