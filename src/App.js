import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

let stateValue;

function useState(initialState) {
  if (stateValue === undefined) {
    stateValue = initialState;
  }

  function setValue(value) {
    stateValue = value;
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  return [stateValue, setValue];
}

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = function () {
    setCounter(counter + 1);
  };

  const handleDecrease = function () {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
