/** @format */

import { useReducer } from "react";

export default function FormRed() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    status: "",
  };

  function Reducer(state, action) {
    switch (action.type) {
      case "form change":
        return {
          ...state,
          [action.name]: action.state,
        };
      case "form start":
        return {
          ...state,
          status: "loading",
        };
      case "form success":
        return {
          ...initialState,
          status: "success",
        };
    }
  }
  function handleChange(e) {
    dispatch({
      type: "form change",
      field: e.target.name,
      state: e.target.value,
    });
  }

  const [state, dispatch] = useReducer(Reducer, initialState);

  function submitHandle(e) {
    dispatch({ type: "submit start" });

    setTimeout(() => {
      dispatch({ type: "submit start" });
    }, 2000);
  }

  return (
    <>
      <form action='' onSubmit={submitHandle}>
        <input type='text' name="firstname" value={state.firstname} onChange={handleChange} />
        <input type='text' name="lastname" value={state.lastname} onChange={handleChange} />
        <input type='email'name="email" value={state.email} onChange={handleChange} />
        <input type='date' name="date" value={state.date} onChange={handleChange} />
        <button type='submit' name="" disabled>
          {state.status}
        </button>
      </form>
    </>
  );
}
