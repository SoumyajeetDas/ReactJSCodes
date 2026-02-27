import React from "react";
import { useForm } from "../../../shared/hooks/useForm";
import Step from "./Step";
import Successful from "./Successful";

const Mutistep = () => {
  const { state } = useForm();

  if (state.step === 1) {
    return (
      <>
        <Step index={1} />
      </>
    );
  } else if (state.step === 2) {
    return (
      <>
        <Step index={2} />
      </>
    );
  } else {
    return (
      <>
        <Successful />
      </>
    );
  }
};

export default Mutistep;
