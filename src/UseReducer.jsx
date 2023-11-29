import React, { useReducer } from "react";

import "./App.css";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CLEAR: "CLEAR",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count + 1 };
    case ACTIONS.CLEAR:
      return { count: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    dispatch({ type: "DECREMENT" });
  }

  function clear() {
    dispatch({ type: "CLEAR" });
  }

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>
      <br />
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
