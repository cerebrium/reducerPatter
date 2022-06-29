import React from "react";

export const Person = ({
  name,
  age,
  gender,
  occupation,
  removePerson,
  editPerson,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id !== "removePerson") {
      editPerson({ name, age, gender, occupation });
    }
  };

  return (
    <tr
      key={`${name}${age}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{occupation}</td>
      <td id="removePerson" onClick={() => removePerson({ name })}>
        x
      </td>
    </tr>
  );
};
