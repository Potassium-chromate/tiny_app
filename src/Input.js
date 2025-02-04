// src/Input.js
import React, { useState } from 'react';

function Input() {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="input1"
          value={inputValues.input1}
          onChange={handleInputChange}
          placeholder="Input 1"
        />
        <input
          type="text"
          name="input2"
          value={inputValues.input2}
          onChange={handleInputChange}
          placeholder="Input 2"
        />
        <input
          type="text"
          name="input3"
          value={inputValues.input3}
          onChange={handleInputChange}
          placeholder="Input 3"
        />
        <input
          type="text"
          name="input4"
          value={inputValues.input4}
          onChange={handleInputChange}
          placeholder="Input 4"
        />
      </form>
      <div>
        <h2>Input Values:</h2>
        <p>Input 1: {inputValues.input1}</p>
        <p>Input 2: {inputValues.input2}</p>
        <p>Input 3: {inputValues.input3}</p>
        <p>Input 4: {inputValues.input4}</p>
      </div>
    </div>
  );
}

export default Input;
