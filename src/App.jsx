import React from "react";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-row">
        <div className="counter-box">
          <h2 className="component-heading">Class Component Counter</h2>
          <ClassCounter />
        </div>
        <div className="counter-box">
          <h2 className="component-heading">Function Component Counter</h2>
          <FunctionCounter />
        </div>
      </div>
    </div>
  );
}
