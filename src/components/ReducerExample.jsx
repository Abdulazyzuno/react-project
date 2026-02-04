import React, { useReducer } from "react";

const initialState = [
  {
    id: "1",
    name: "Lucia",
    other: "",
    occupation: "Trader",
    age: 40,
  },
  {
    id: "20000000000000",
    name: "Abdulazeez",
    occupation: "Instructor",
    other: "",
    age: 12,
  },
  {
    id: "300000",
    name: "Samson",
    occupation: "Data Instructor",
    other: "",
    age: 20,
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_AGE":
      return state.map((user) => {
        if (action.payload == user.id) {
          return { ...user, age: user.age + 1, other: "Testing" };
        } else {
          return  user;
        }
      });
    case "DECREASE_AGE":
      return state.map((user) => {
        if (action.payload == user.id) {
          return { ...user, age: user.age - 1 };
        } else {
          return user ;
        }
      });
  }
}
export default function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrease = (id, other) => {
    dispatch({ type: "INCREASE_AGE", payload: id, otherName: other });
  };
  const handleDecrease = (id, other) => {
    dispatch({ type: "DECREASE_AGE", payload: id, otherName: other });
  };
  return (
    <div>
      {state.map((user, index) => {
        return (
          <div key={index}>
            name: {user.name}
            occupation: {user.occupation}
            age: {user.age}
            other: {user.other}
            <div key={user.id}>
              <button onClick={() => handleIncrease(user.id, user.other)}>
                Increase
              </button>
              <button onClick={() => handleDecrease(user.id, user.other)}>
                Decrease
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
