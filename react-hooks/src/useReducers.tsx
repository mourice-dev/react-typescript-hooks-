/** @format */

import { useReducer } from "react";

export default function useReducers() {
  const initialState = { count: 0 };

  function Reducer(state, action) {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else {
      return { count: state.count - 1 };
    }
  }
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>increment</button>
    </>
  );
}
