import React, { useState } from "react";
import MyContext from "./context/MyContext";
import ChildComponent from "./ChildComponent";
const ParentComponent = (props: any) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const contextValue = { a, b };
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
      <ChildComponent />
    </MyContext.Provider>
  );
};
export default ParentComponent;
