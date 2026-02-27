import { use } from "react";
import { FormContext } from "../context/FormContextFile";

export const useForm = () => {
  const context = use(FormContext);

  if (!context) {
    throw new Error("Please wrap the component with FormProvider");
  }

  return context;
};
