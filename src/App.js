import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Calculator from "./components/calculatorFunctionality";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <Title />
      <Calculator />
    </div>
  );
}

export default App;
