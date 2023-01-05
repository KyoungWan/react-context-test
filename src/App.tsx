import "./App.css";
import ChildComponent from "./ChildComponent";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="App">
      App Component
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </div>
  );
}

export default App;
