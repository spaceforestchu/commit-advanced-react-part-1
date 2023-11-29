import React, { useState, useMemo, useEffect } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(0);
  const [greeting, setGreeting] = useState("");

  const styleObj = useMemo(() => {
    return {
      backgroundColor: show ? "#f0899c" : "#89f0aa ",
    };
  }, [show]);

  // const styleObj = {
  //   backgroundColor: show ? "#f0899c" : "#89f0aa ",
  // };

  const largeCount = useMemo(() => {
    return superSlowFunction(input, greeting);
  }, [input, greeting]);

  useEffect(() => {
    console.log(styleObj);
  }, [styleObj]);

  return (
    <div>
      <div>UseMemo</div>
      {show && <div style={{ backgroundColor: show && "#89cff0" }}>Appear</div>}
      <div>
        <div>
          <label>Enter number</label>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <label>Enter Greeting</label>
          <input
            type="text"
            value={greeting}
            onChange={(e) => setGreeting(e.target.value)}
          />
        </div>
        <button onClick={() => setShow((prev) => !prev)}>Show me</button>
        <div> {largeCount}</div>
        {/* <div> {superSlowFunction(10, "hello class")}</div> */}

        <hr />
        <div>
          <p>Each rerender recreate the object</p>
          <div style={styleObj}>Change color</div>
        </div>
      </div>
    </div>
  );
}

function superSlowFunction(num, greeting) {
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  return count * num + " " + greeting;
}

export default App;
