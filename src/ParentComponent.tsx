import React, { useMemo, useRef, useState } from "react";
import MyContext from "./context/MyContext";

const ParentComponent = (props: any) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const contextValue = useMemo(() => {
    return { a, b };
  }, [a, b]);

  const counter = useRef(0);

  counter.current += 1;
  return (
    <MyContext.Provider value={contextValue}>
      <div
        className="parent component"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          background: "#f1f1f1",
        }}
      >
        <div>
          <button>
            <span onClick={() => setA((a) => a + 1)}>Increment A</span>
          </button>
          <button>
            <span onClick={() => setB((b) => b + 1)}>Increment B</span>
          </button>
          <button>
            <span onClick={() => setC((c) => c + 1)}>Increment C</span>
          </button>
          <button
            onClick={() => {
              setA(0);
              setB(0);
            }}
          >
            reset
          </button>
        </div>
        <h2>Parent component</h2>
        <h4>I want to be re-rendered when context(a, b) changed</h4>
        <h4>
          I <span className="red">dont </span> want to be re-rendered when c
          changed
        </h4>
        <h4>I rerendered: {counter.current} times</h4>
        <h4 className="highlight"> State variable c: {c}</h4>
      </div>
      {props.children}
    </MyContext.Provider>
  );
};
export default ParentComponent;
