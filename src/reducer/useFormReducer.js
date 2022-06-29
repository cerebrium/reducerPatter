import React, { useReducer } from "react";

export const useFormReducer = ({ initialState = null }) => {
  function init(initialState) {
    return { ...initialState };
  }

  const initialFormState = {
    name: "",
    age: 0,
    gender: "",
    occupation: "",
  };

  function formReducer(state, action) {
    switch (action.type) {
      case "name":
        return { ...state, name: action.value };
      case "age":
        return { ...state, age: action.value };
      case "gender":
        return { ...state, gender: action.value };
      case "occupation":
        return { ...state, occupation: action.value };
      case "reset":
        // @ts-ignore
        return init(action.initialFormState);
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(
    formReducer,
    initialState ? initialState : initialFormState,
    init
  );

  return [formState, { dispatch }];
};
