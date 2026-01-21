import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { TestContext } from "../context/test";

export function MyForm() {
  const color = useContext(TestContext);
  const [count, setCount] = useState(1);
  const [calculation, setCalculation] = useState(0);
  const [inputs, setInputs] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    const handleCalculation = () => setCalculation(() => count * 5);
    return handleCalculation;
  }, [count]);
  useEffect(() => {
    const handleCount = () => setCount((cnt) => cnt * 5);
    return handleCount;
  }, [count]);
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let fillings = "";
    if (inputs.tomato) fillings += "tomato";
    if (inputs.onion) {
      if (inputs.tomato) fillings += " and ";
      fillings += "onion";
    }
    if (fillings == "") fillings = "no fillings";
    setShowModal(true);
    e.preventDefault();
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Modal {...inputs} onClose={handleClose} />}
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Burger Order Form</h2>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            name="firstname"
            value={inputs.firstname || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Select a car</label>
          <select name="cars" value={inputs.cars || ""} onChange={handleChange}>
            <option value="">Choose</option>
          </select>
        </div>

        <div className="form-group">
          <label>Write here</label>
          <textarea
            name="txt"
            value={inputs.txt || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <p>I want a burger with:</p>
          <label className="inline">
            <input
              type="checkbox"
              name="tomato"
              checked={inputs.tomato || false}
              onChange={handleChange}
            />
            Tomato
          </label>
          <label className="inline">
            <input
              type="checkbox"
              name="onion"
              checked={inputs.onion || false}
              onChange={handleChange}
            />
            Onion
          </label>
        </div>

        <div className="form-group">
          <p>Select your favorite fruit:</p>
          <label className="inline">
            <input
              type="radio"
              name="fruit"
              value="apple"
              checked={inputs.fruit === "apple"}
              onChange={handleChange}
            />
            Apple
          </label>
          <label className="inline">
            <input
              type="radio"
              name="fruit"
              value="banana"
              checked={inputs.fruit === "banana"}
              onChange={handleChange}
            />
            Banana
          </label>
          <label className="inline">
            <input
              type="radio"
              name="fruit"
              value="cherry"
              checked={inputs.fruit === "cherry"}
              onChange={handleChange}
            />
            Cherry
          </label>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>

        <pre className="output">
          Current values:
          {`
${inputs.firstname ?? ""}
${inputs.lastname ?? ""}
${inputs.cars ?? ""}
${inputs.fruit ?? ""}
${inputs.txt ?? ""}
        `}
        </pre>
      </form>
    </>
  );
}

export default MyForm;
