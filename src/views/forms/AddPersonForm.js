import React from "react";
import { useFormReducer } from "../../reducer/useFormReducer";
import "./style.css";

export const AddPerson = ({ addPerson, closeForm }) => {
  const [formState, { dispatch }] = useFormReducer({});
  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson({ type: "add", payload: formState });
    // @ts-ignore
    dispatch({ type: "reset" });
    closeForm();
  };

  const handleChange = (e) => {
    // @ts-ignore
    dispatch({ type: e.target.id, value: e.target.value });
  };

  return (
    <div className="formContainer">
      <div className="formOutline">
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <h3 aria-label="title">CREATE YOUR PERSON!</h3>
          <div className="inputBox">
            <label>Name</label>
            <input type="text" id="name" value={formState.name} />
          </div>

          <div className="inputBox">
            <label>Age</label>
            <input type="number" id="age" value={formState.age} />
          </div>

          <div className="inputBox">
            <label>Gender</label>
            <input type="text" id="gender" value={formState.gender} />
          </div>

          <div className="inputBox">
            <label>Occupation</label>
            <input type="text" id="occupation" value={formState.occupation} />
          </div>

          <input type="submit" value="Add Person" className="submitButton" />
        </form>
      </div>
    </div>
  );
};
