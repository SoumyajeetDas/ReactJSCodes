import React from "react";
import { useForm } from "../../../shared/hooks/useForm";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Card = ({ children, index }) => {
  const { dispatch, validitation, state } = useForm();
  return (
    <div className="w-2xl  shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-md">
      <h1 className="text-3xl text-center font-bold">Step {index}</h1>
      <div className="flex flex-col justify-between items-cente mt-20 gap-10">
        {children}

        <div className="flex justify-center items-center gap-4">
          <button
            className={`${index === 1 ? "bg-gray-300 text-gray-400" : "bg-white text-black border border-black"}  cursor-pointer  p-2 rounded-sm w-xs flex justify-center items-center gap-2`}
            disabled={index === 1}
            onClick={() => dispatch({ type: "SET_PREV" })}
          >
            <ArrowLeft />
            Previous
          </button>
          <button
            className={`cursor-pointer ${state.loading ? "bg-gray-300 text-gray-400" : "bg-black text-white"}  p-2 rounded-sm w-xs flex justify-center items-center gap-2`}
            onClick={() => validitation()}
            disabled={state.loading}
          >
            {state.loading ? "Loading..." : "Next"}
            {!state.loading && <ArrowRight />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
