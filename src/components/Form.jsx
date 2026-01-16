import { useContext, useState } from "react";
import Modal from "./Modal";
import { TestContext } from "../context/test";

export function MyForm() {
    const color = useContext(TestContext)
  const [inputs, setInputs] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    const target = e.target; //identifying element that is firing the event
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    let fillings = "";
    if (inputs.tomato) fillings += "tomato";
    if (inputs.onion) {
      if (inputs.tomato) fillings += " and ";
      fillings += "onion";
    }
    if (fillings == "") fillings = "no fillings";
    setShowModal(true);
    event.preventDefault();
  };
  const handleClose = ()=> {
    setShowModal(false)
  }

  return (
    <>
    {showModal && <Modal {...inputs} onClose={handleClose}/>}
      <form onSubmit={handleSubmit}>
        {color}
        <label>
          First name:
          <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          Last name:
          <input
            type="text"
            name="lastname"
            value={inputs.lastname}
            onChange={handleChange}
          />
        </label>
        <br />
        <select name="cars" value={inputs.cars} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <br />
        <label>
          Write here:
          <textarea value={inputs.txt} name="txt" onChange={handleChange} />
        </label>
        <br />
        <p>I want a burger with:</p>
        <label>
          Tomato:
          <input
            type="checkbox"
            name="tomato"
            checked={inputs.tomato}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Onion:
          <input
            type="checkbox"
            name="onion"
            checked={inputs.onion}
            onChange={handleChange}
          />
        </label>
        <br />
        <p>Select your favorite fruit:</p>
        <label>
          <input
            type="radio"
            name="fruit"
            value="apple"
            checked={inputs.fruit === "apple"}
            onChange={handleChange}
          />{" "}
          Apple
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="fruit"
            value="banana"
            checked={inputs.fruit === "banana"}
            onChange={handleChange}
          />{" "}
          Banana
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="fruit"
            value="cherry"
            checked={inputs.fruit === "cherry"}
            onChange={handleChange}
          />{" "}
          Cherry
        </label>
        <br />
        <button type="submit">Submit</button>
        <pre>
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
