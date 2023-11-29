import React, { useContext, createContext, useState, useEffect } from "react";

import "./App.css";

const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState("Michael Jordan");
  function logMe() {
    console.log("Hello!");
  }

  return (
    <UserContext.Provider value={{ userName, setUserName, logMe }}>
      <div>
        <p>useContext</p>
        <p>{userName}</p>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

function Parent() {
  return (
    <div>
      Parent
      <div>
        Child One: <ChildOne />
      </div>
    </div>
  );
}

function ChildOne() {
  return (
    <div>
      Child Two: <ChildTwo />
    </div>
  );
}

function ChildTwo() {
  return (
    <div>
      Child Three: <ChildThree />
    </div>
  );
}

function ChildThree() {
  //   const data = useContext(UserContext);
  const { userName, setUserName, logMe } = useContext(UserContext);

  useEffect(() => {
    logMe();
  }, []);

  return (
    <div>
      I am the last one
      <div>
        <button
          onClick={() =>
            setUserName(`${userName}: I am the greatest basketball player`)
          }
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
