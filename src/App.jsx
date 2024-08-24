import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userName } from "./features/redux-slices/nameSlice";

const App = () => {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    dispatch(userName(inputValue)); // Dispatching the input value
  };

  return (
    <div className="container">
      <h1>{name}</h1>
      <input
        type="text"
        placeholder="Enter your name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Handling input change
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
