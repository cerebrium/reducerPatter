import React, { useState } from "react";
import { usePeopleReducer } from "../../reducer/usePeopleReducer";
import { Person } from "./Person";
import { AddPerson } from "../forms/AddPersonForm";
import { EditPerson } from "../forms/EditPerson";
import "./style.css";

const labels = ["Name", "Age", "Gender", "Occupation"];
export const People = () => {
  const [addingPerson, setAddingPerson] = useState(false);
  const [editingDetails, setEditingDetails] = useState(null);

  // @ts-ignore
  const [people, { addPerson, updatePerson, removePerson }] =
    usePeopleReducer();

  const toggleUpdate = (personalDetails) => {
    setEditingDetails(personalDetails);
  };

  return (
    <div className="container">
      <div>
        <h3>Hello To People Maker</h3>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              {labels.map((label, idx) => {
                return (
                  <th key={idx}>
                    <b>{label}</b>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {people
              // @ts-ignore
              .map((person) => {
                return (
                  <Person
                    {...person}
                    removePerson={removePerson}
                    editPerson={toggleUpdate}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      <div>
        {!addingPerson && (
          <button
            // @ts-ignore
            onClick={() => setAddingPerson(() => true)}
          >
            Add Person
          </button>
        )}
        {addingPerson && (
          <AddPerson
            addPerson={addPerson}
            closeForm={() => setAddingPerson(() => false)}
          />
        )}
        {editingDetails && (
          <EditPerson
            updatePerson={updatePerson}
            personDetails={editingDetails}
            closeForm={() => setEditingDetails(() => null)}
          />
        )}
      </div>
    </div>
  );
};
