import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");

  const inputRef = useRef("");

  let refCount = useRef(0);

  useEffect(() => {
    console.log("rerendering");
  }, [name]);

  console.log("rendering outside useEffect");

  function handleClick() {
    refCount.current = refCount.current + 1;
    alert("You clicked " + refCount.current + " times!");
  }

  return (
    <div>
      <div>
        <p>Using State - controlled form</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>{name}</div>
      </div>

      <div>
        <p>Using Ref - uncontroller form</p>
        <input type="text" ref={inputRef} />
        <div>{inputRef.current.value}</div>
        <button onClick={() => console.log(inputRef.current.value)}>
          Submit
        </button>
      </div>

      <hr />
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
