import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [todoNumber, setTodoNumber] = useState("");
  const [usersList, setUsersList] = useState([]);

  const fetchTodo = useCallback(async () => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${todoNumber || ""}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setUsersList(json);
        } else {
          let array = [json];
          setUsersList(array);
        }
      });
  }, [todoNumber]);

  // const fetchTodo = async () => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${todoNumber || ""}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (Array.isArray(json)) {
  //         setUsersList(json);
  //       } else {
  //         let array = [json];
  //         setUsersList(array);
  //       }
  //     });
  // };

  return (
    <div>
      <p>UseCallback</p>
      <div>
        {toggle && <p style={{ backgroundColor: "lightblue" }}>SHOW ME</p>}
      </div>
      <button onClick={() => setToggle((prev) => !prev)}>Click Me</button>

      <hr />
      <p>Fetch Data</p>
      <input
        type="number"
        value={todoNumber}
        onChange={(e) => setTodoNumber(e.target.value)}
      />
      <ShowList
        users={usersList}
        fetchTodo={fetchTodo}
        todoNumber={todoNumber}
      />
    </div>
  );
}

function ShowList({ users, fetchTodo, todoNumber }) {
  useEffect(() => {
    fetchTodo();
    console.log("ShowList component is callled");
  }, [fetchTodo, todoNumber]);

  return (
    <div>
      {users.map((item) => {
        return (
          <div key={item.id}>
            {" "}
            {item.id}: {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
