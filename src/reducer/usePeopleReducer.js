import React, { useCallback, useReducer } from "react";

const initialState = [
  { name: "frank", age: 23, gender: "male", occupation: "engineer" },
  { name: "stubby", age: 45, gender: "female", occupation: "rocketeer" },
  { name: "joe", age: 63, gender: "male", occupation: "chef" },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return [...state.filter((person) => person.name !== action.name)];
    case "edit":
      return [
        ...state.filter((person) => person.name !== action.payload.name),
        action.payload,
      ];
    default:
      throw new Error("non valid reducer type");
  }
}
export const usePeopleReducer = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);

  const updatePerson = useCallback(({ payload }) => {
    // @ts-ignore
    dispatch({ type: "edit", payload });
  }, []);

  const addPerson = useCallback(({ payload }) => {
    // @ts-ignore
    dispatch({ type: "add", payload });
  }, []);

  const removePerson = useCallback(({ name }) => {
    // @ts-ignore
    dispatch({ type: "remove", name });
  }, []);

  return [state, { updatePerson, removePerson, addPerson }];
};
