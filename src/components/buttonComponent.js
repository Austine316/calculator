import React from "react";

const buttonName = [
  "(",
  ")",
  "C",
  "CE",
  "/",
  "8",
  "9",
  "*",
  "5",
  "6",
  "7",
  "-",
  "2",
  "3",
  "4",
  "+",
  "1",
  "0",
  ".",
  "=",
];

const KeyPadComponent = ({ onClick }) => {
  return (
    <div className="button-container">
      {buttonName.map((item) => {
        return (
          <button
            key={item}
            name={item}
            onClick={(event) => onClick(event.target.name)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default KeyPadComponent;
