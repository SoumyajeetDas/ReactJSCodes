import React from "react";
import { useForm } from "../../../shared/hooks/useForm";
import Card from "../card/Card";

const Step = ({ index }) => {
  const { dispatch, state } = useForm();

  if (index === 1) {
    return (
      <Card index={index}>
        <div>
          <input
            value={state.formState.username}
            className="outline outline-gray-300 rounded-sm w-full p-2"
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              dispatch({
                type: "SET_FORM",
                payload: {
                  field: "username",
                  value: e.target.value,
                },
              });
            }}
          />
          <p className="text-red-500">{state.errors?.username}</p>
        </div>
      </Card>
    );
  } else {
    return (
      <Card index={index}>
        <div>
          <input
            value={state.formState.email}
            className="outline outline-gray-300 rounded-sm w-full p-2"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              dispatch({
                type: "SET_FORM",
                payload: {
                  field: "email",
                  value: e.target.value,
                },
              });
            }}
          />
          <p className="text-red-500">{state.errors?.email}</p>
        </div>
      </Card>
    );
  }
};

export default Step;
