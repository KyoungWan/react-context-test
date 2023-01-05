import React, { useContext, useEffect, useRef } from "react";
import MyContext from "./context/MyContext";
type Props = any;
const GrandChildComponent: React.FC<Props> = () => {
  const value = useContext(MyContext);
  const counter = useRef(0);

  counter.current += 1;
  return (
    <div
      style={{
        background: "orange",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="component"
    >
      <h2>Grand child component</h2>
      <h4>I want to be re-rendered when context(a, b) changed</h4>
      <h4>
        I <span className="red">dont </span> want to be re-rendered when c
        changed
      </h4>
      <h4 className="highlight">Context value.a: {value.a}</h4>
      <h4 className="highlight">Context value.b: {value.b}</h4>
      <h4>I rerendered: {counter.current} times</h4>
    </div>
  );
};
export default GrandChildComponent;
