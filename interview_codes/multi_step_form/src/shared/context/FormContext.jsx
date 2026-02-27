import { useReducer, useRef } from "react";
import { FormContext } from "./FormContextFile";

const initialState = {
  step: 1,
  errors: {},
  loading: false,
  formState: {
    username: "",
    email: "",
  },
};

const formReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_ERRORS":
      return { ...state, errors: actions.payload };

    case "SET_NEXT":
      return { ...state, step: state.step + 1 };

    case "SET_PREV":
      return { ...state, step: state.step - 1 };

    case "SET_LOADING":
      return { ...state, loading: actions.payload };

    case "SET_FORM":
      return {
        ...state,
        formState: {
          ...state.formState,
          [actions.payload.field]: actions.payload.value,
        },
      };

    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const ref = useRef(null);

  const fetchData = async () => {
    try {
      if (ref.current) {
        ref.current.abort();
      }

      const controller = new AbortController();
      ref.current = controller;

      const response = await fetch("https://dummyjson.com/recipes", {
        signal: controller.signal,
      });

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      return err;
    }
  };

  const validitation = async () => {
    let errors = {};

    if (state.step === 1) {
      if (!state.formState.username) {
        errors.username = "Please provide a username";
      }
    }

    if (state.step === 2) {
      if (!state.formState.email || !state.formState.email.includes("@")) {
        errors.email = "Please enter a valid email";
      }

      dispatch({ type: "SET_LOADING", payload: true });

      let data = await fetchData();

      if (data) {
        errors.email = "Error fetching data. Please try again." + data.message;
      }
    }

    dispatch({ type: "SET_LOADING", payload: false });

    dispatch({ type: "SET_ERRORS", payload: errors });

    if (Object.keys(errors).length === 0) {
      dispatch({ type: "SET_NEXT" });
    }
  };

  return (
    <FormContext.Provider value={{ state, dispatch, validitation }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
