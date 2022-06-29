import React from "react";
import { useFormReducer } from "../../reducer/useFormReducer";
import "./style.css";

export const EditPerson = ({ updatePerson, closeForm, personDetails }) => {
  const [formState, { dispatch }] = useFormReducer({
    initialState: personDetails,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePerson({ type: "edit", payload: formState });
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
          {/* lazy dev alert... used names, since didnt feel like adding id, so name cant be changed */}

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

          <input type="submit" value="Edit Person" className="submitButton" />
        </form>
      </div>
    </div>
  );
};
