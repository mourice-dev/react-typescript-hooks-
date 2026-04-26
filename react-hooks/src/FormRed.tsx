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
          [action.field]: action.value,
        };
      case "form_start":
        return {
          ...state,
          status: "loading",
        };
      case "form_success":
        return {
          ...initialState,
          status: "success",
        };
      default:
        return state;
    }
  }
  function handleChange(e) {
    dispatch({
      type: "form change",
      field: e.target.name,
      value: e.target.value,
    });
  }

  const [state, dispatch] = useReducer(Reducer, initialState);

  function submitHandle(e) {
    e.preventDefault();
    dispatch({ type: "form_start" });

    setTimeout(() => {
      dispatch({ type: "form_success" });
    }, 2000);
  }

  return (
    <>
      <form action='' onSubmit={submitHandle}>
        <input type='text' name="firstname" value={state.firstname} onChange={handleChange} />
        <input type='text' name="lastname" value={state.lastname} onChange={handleChange} />
        <input type='email'name="email" value={state.email} onChange={handleChange} />
        <input type='date' name="date" value={state.date} onChange={handleChange} />
        <button type='submit' name="status" disabled={state.status === "loading"}>
          {state.status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </>
  );
}
    