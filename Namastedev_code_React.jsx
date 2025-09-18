import React, { useState } from "react";
import "./styles.css";
function ChipsInput() {
  const [value, setValue] = useState("");
  const [chips, setChips] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !chips.includes(value) && value !== "") {
      setChips([...chips, value]);
    }
  };
  const handleClick = (x) => {
    setChips(chips.filter((item) => item !== x));
  };
  //console.log("abc", chips)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={(e) => setValue(e.target.value.trim())}
        onKeyDown={handleKeyDown}
      />
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "10px",
        }}
      >
        {chips.map((item, idx) => (
          <span
            key={idx}
            style={{
              padding: "6px 10px",
              borderRadius: "20px",
              background: "white",
              color: "black",
              fontSize: "14px",
            }}
          >
            {item}
            <button
              onClick={() => {
                handleClick(item);
              }}
            >
              X
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
