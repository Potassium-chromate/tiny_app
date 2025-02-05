import { useState } from "react";
import "./App.css";

function App() {
  const [rows, setRows] = useState([]); // Array of rows, each containing input values for 4 players
  const [playersname, setNames] = useState(["", "", "", ""]); // Store player names

  const AddRow = () => {
    // Add a new row with default values (0, 0, 0, 0) for each player and editable state as false
    setRows([...rows, { values: [0, 0, 0, 0], editable: false }]);
  };

  const DeleteRow = (rowIndex) => {
    // Remove the row at the specified index
    const newRows = rows.filter((_, index) => index !== rowIndex);
    setRows(newRows);
  };

  const HandleInputChange = (rowIndex, colIndex, value) => {
    // Update a specific value in the 2D array
    const newRows = [...rows];
    newRows[rowIndex].values[colIndex] = value;
    setRows(newRows);
  };

  const HandleNameChange = (index, value) => {
    // Update player names
    const newNames = [...playersname];
    newNames[index] = value;
    setNames(newNames);
  };

  const HandleRevise = (rowIndex) => {
    // Toggle the editable state of the row
    const newRows = [...rows];
    newRows[rowIndex].editable = !newRows[rowIndex].editable;
    setRows(newRows);
  };

  const CalculateSums = () => {
    // Calculate the sums for each player (column)
    const sums = [0, 0, 0, 0];
    rows.forEach((row) => {
      row.values.forEach((value, colIndex) => {
        sums[colIndex] += value;
      });
    });
    return sums;
  };

  const sums = CalculateSums();

  return (
    <div>
      <button onClick={AddRow}>Add Row</button>
      <h2>Scoreboard</h2>

      {/* Player name inputs */}
      <div className="input-row">
        {playersname.map((name, index) => (
          <input
            key={index}
            type="text"
            value={name}
            onChange={(e) => HandleNameChange(index, e.target.value)}
            placeholder={`Player ${index + 1}`}
          />
        ))}
      </div>
      <NumberInputList
        rows={rows}
        onInputChange={HandleInputChange}
        onDeleteRow={DeleteRow}
        onRevise={HandleRevise}
      />
      <h3>Totals</h3>
      {sums.map((sum, index) => (
        <p key={index}>{playersname[index] || `Player ${index + 1}`} : {sum}</p>
      ))}
    </div>
  );
}

function NumberInputList({ rows, onInputChange, onDeleteRow, onRevise }) {
  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="input-row">
          {row.values.map((value, colIndex) => (
            <InputRect
              key={colIndex}
              value={value}
              colIndex={colIndex}
              rowIndex={rowIndex}
              onChange={onInputChange}
              editable={row.editable}
            />
          ))}
          <button onClick={() => onDeleteRow(rowIndex)}>Delete Row</button>
          <button
            onClick={() => onRevise(rowIndex)}
            style={{
              backgroundColor: row.editable ? "#ff0000" : "#007bff", // blue if editable, red otherwise
            }}
          >
            {row.editable ? "Confirm" : "Revise"}
          </button>
        </div>
      ))}
    </div>
  );
}


function InputRect({ value, colIndex, rowIndex, onChange, editable }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(rowIndex, colIndex, Number(e.target.value))}
      disabled={!editable} // Disable the input if not editable
    />
  );
}

export default App;
