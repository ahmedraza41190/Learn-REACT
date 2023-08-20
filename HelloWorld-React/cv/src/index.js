import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let itemNumber = 18;

function Hi() {
  return (
    <div>
      Hello <strong>Ahmed!</strong>
      <h1>Welcome To REACT</h1>
      <ul className="myList" id="23">
        <li>Hello world React</li>
        <li>React Import</li>
        <li>React Components</li>
        <li>React Rendering</li>
        <li>5 + 10 = {5 + 10}</li>
        <li>8 + 10 = {itemNumber}</li>
        <li>8 + 10 + 1 increment = {++itemNumber}</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
