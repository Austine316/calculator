import React, { useState } from "react";
import KeyPadButtons from "./buttonComponent";
import ResultComponent from "./resultComponent";

const Calculator = () => {
  const [inputResult, setInputResult] = useState("");
  const [finalResult, setFinalResult] = useState("0");

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setInputResult(inputResult + button);
    }
  };

  const calculate = () => {
    var checkResult;

    if (inputResult.includes("mod")) {
      checkResult = inputResult.replace("mod", "%");
    } else if (inputResult.includes("--")) {
      checkResult = inputResult.replace("--", "+");
    } else {
      checkResult = inputResult;
    }
    try {
      let solution = eval(checkResult);

      if (isNaN(solution)) {
        solution = "undefine";
      }
      setFinalResult(solution);
    } catch (error) {
      setFinalResult("error");
    }
    console.log(checkResult);
  };

  const reset = () => {
    setFinalResult(0);
    setInputResult("0");
  };

  const backspace = () => {
    setInputResult(inputResult.slice(0, -1));
  };
  return (
    <div className="calculator-container">
      <ResultComponent inputResult={inputResult} finalResult={finalResult} />
      <KeyPadButtons onClick={onClick} />
    </div>
  );
};

export default Calculator;
