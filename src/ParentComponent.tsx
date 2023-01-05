import React, { useMemo, useState } from "react";
import MyContext from "./context/MyContext";

const ParentComponent = (props: any) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const contextValue = useMemo(() => {
    return { a, b };
  }, [a, b]);
  return (
    <MyContext.Provider value={contextValue}>
      <div
        className="parent"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px",
        }}
      >
        <button>
          <span onClick={() => setA((a) => a + 1)}>Increment A</span>
        </button>
        <button>
          <span onClick={() => setB((b) => b + 1)}>Increment B</span>
        </button>
        <button>
          <span onClick={() => setC((c) => c + 1)}>Increment C</span>
        </button>
        {/* // refresh button */}
        <button
          onClick={() => {
            setA(0);
            setB(0);
          }}
        >
          refresh
        </button>
      </div>
      <div> c {c}</div>
      {props.children}
    </MyContext.Provider>
  );
};
export default ParentComponent;
