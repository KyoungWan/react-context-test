import React, { useContext, useEffect, useRef } from "react";
import MyContext from "./context/MyContext";
type Props = any;
const GrandChildComponent: React.FC<Props> = () => {
  const value = useContext(MyContext);
  const counter = useRef(0);

  counter.current += 1;
  return (
    <div style={{ background: "orange" }}>
      I am grand child component
      <div>value.a: {value.a}</div>
      <div>value.b: {value.b}</div>
      <h4>I rerendered: {counter.current} times</h4>
    </div>
  );
};
export default GrandChildComponent;
