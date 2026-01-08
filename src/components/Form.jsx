import { useState } from "react";
import { PrimaryButton } from "../styles/button";

export function MyForm() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
   const target = e.target
   const name = target.name
   const value = target.type === "checkbox" ? target.checked : target.value
   setInputs((prev)=> ({...prev, [name]:value}))
  };
  const handleSubmit = (event) => {
    let fillings = "";
    if (inputs.tomato) fillings += "tomato";
    if (inputs.onion) {
      if (inputs.tomato) fillings += " and ";
      fillings += "onion";
    }
    if (fillings == "") fillings = "no fillings";
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastname"
          value={inputs.lastname}
          onChange={handleChange}
        />
      </label>

      <select name="cars" value={inputs.cars} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <label>
        Write here:
        <textarea value={inputs.txt} name="txt" onChange={handleChange} />
      </label>
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
      <label>
        Onion:
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>
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
      <button type="submit">Submit</button>
      <p>
        Current values: {inputs.firstname} {inputs.lastname} {inputs.cars}{inputs.fruit}
        {inputs.txt}
      </p>
    </form>
  );
}
