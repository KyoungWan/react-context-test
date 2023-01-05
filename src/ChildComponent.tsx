import React, { useRef } from "react";
import GrandChildComponent from "./GrandChildComponent";
const ChildComponent = (props: any) => {
  const counter = useRef(0);

  counter.current += 1;

  return (
    <div
      style={{
        display: "block",
        background: "gray",
      }}
    >
      <h4>
        I am child component I dont want to be re-rendered when context changed
      </h4>
      <h4>I rerendered: {counter.current} times</h4>
      <GrandChildComponent />
    </div>
  );
};
export default ChildComponent;
