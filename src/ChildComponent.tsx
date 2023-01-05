import React, { useRef } from "react";
import GrandChildComponent from "./GrandChildComponent";
const ChildComponent = (props: any) => {
  const counter = useRef(0);

  counter.current += 1;

  return (
    <>
      <div
        className="component"
        style={{
          display: "block",
          background: "gray",
        }}
      >
        <h2>Child component</h2>
        <h4>
          I <span className="red">dont </span> want to be re-rendered when
          context(a, b) changed
        </h4>
        <h4>
          I <span className="red">dont </span> want to be re-rendered when c
          changed
        </h4>
        <h4>I rerendered: {counter.current} times</h4>
      </div>
      <GrandChildComponent />
    </>
  );
};
export default ChildComponent;
