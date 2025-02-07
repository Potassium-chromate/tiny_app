import React, { useState, useEffect} from "react";
import "./Table.css";
import CreateSum from "./Sum.jsx"
import penIcon from "./images/pen.png";
import trashBinIcon from "./images/trash-bin.png";
import saveIcon from "./images/save.256x256.png";

function CreateTable() {
  // Initialize state with data from localStorage or default to empty array if not found
  const [rows, setRows] = useState(() => {
    const storedRows = localStorage.getItem("rows");
    return storedRows ? JSON.parse(storedRows) : [];
  });

  const [playersname, setNames] = useState(() => {
    const storedNames = localStorage.getItem("playersname");
    return storedNames ? JSON.parse(storedNames) : ["", "", "", ""];
  });

  useEffect(() => {
    // Store rows and playersname to localStorage whenever they change
    localStorage.setItem("rows", JSON.stringify(rows));
    localStorage.setItem("playersname", JSON.stringify(playersname));
  }, [rows, playersname]); // Only run when rows or playersname changes

  const AddRow = () => {
    setRows([...rows, { values: [0, 0, 0, 0], editable: false, draftValues: [0, 0, 0, 0] }]);
  };

  const DeleteRow = (rowIndex) => {
    const newRows = rows.filter((_, index) => index !== rowIndex);
    setRows(newRows);
  };

  const HandleInputChange = (rowIndex, colIndex, value) => {
    const numericValue = isNaN(Number(value)) ? 0 : Number(value);
    const newRows = [...rows];
    newRows[rowIndex].draftValues[colIndex] = numericValue;
    setRows(newRows);
  };

  const HandleNameChange = (index, value) => {
    const newNames = [...playersname];
    newNames[index] = value;
    setNames(newNames);
  };

  const HandleRevise = (rowIndex) => {
    const newRows = [...rows];
    const row = newRows[rowIndex];

    if (row.editable) {
      row.values = [...row.draftValues];
    }
    row.editable = !row.editable;
    setRows(newRows);
  };

  const CalculateSums = () => {
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
    <>
      <div className="table">
        <div className="input-row">
          <p>#</p>
          {playersname.map((name, index) => (
            <input
              className="name_rect"
              key={index}
              type="text"
              value={name}
              onChange={(e) => HandleNameChange(index, e.target.value)}
              placeholder={`Player ${index + 1}`}
            />
          ))}
          <button className="add_row" onClick={AddRow}>+</button>
        </div>
        <NumberInputList
          rows={rows}
          onInputChange={HandleInputChange}
          onDeleteRow={DeleteRow}
          onRevise={HandleRevise}
        />
      </div>
      <CreateSum sums={sums} />
    </>
  );
}

function NumberInputList({ rows, onInputChange, onDeleteRow, onRevise }) {
  return (
    <div className="row_container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="input-row">
          <p>#{rowIndex + 1}</p>
          {row.draftValues.map((value, colIndex) => (
              <InputRect
                key={colIndex}
                value={value}
                colIndex={colIndex}
                rowIndex={rowIndex}
                onChange={onInputChange}
                editable={row.editable}
              />
          ))}
          <button onClick={() => onDeleteRow(rowIndex)}>
            <img src={trashBinIcon} width="16" height="16" />
          </button>
          <button
            onClick={() => onRevise(rowIndex)}
            style={{
              backgroundColor: row.editable ? "#ae675c" : "#b0e0e6", // blue if editable, red otherwise
            }}
          >
            {row.editable ? 
            <img src={saveIcon} width="16" height="16" /> : 
            <img src={penIcon} width="16" height="16" />}
          </button>
        </div>
      ))}
    </div>
  );
}

function InputRect({ value, colIndex, rowIndex, onChange, editable }) {
  return (
    <input
      className="input_rect"
      type="text"
      value={value}
      onChange={(e) => onChange(rowIndex, colIndex, e.target.value)} // Store draft value
      disabled={!editable} // Disable the input if not editable
    />
  );
}

export default CreateTable;
