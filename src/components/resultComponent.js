import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { inputResult, finalResult } = this.props;
    return (
      <div className="resultDisplay">
        <p>{inputResult}</p>
        <h1>{finalResult}</h1>
      </div>
    );
  }
}

export default ResultComponent;
