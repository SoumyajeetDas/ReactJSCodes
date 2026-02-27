import React from "react";
import { useForm } from "../../../shared/hooks/useForm";

const Successful = () => {
  const { state } = useForm();
  return (
    <div className="border-2 border-green-400 bg-green-100 text-green-600 w-2xl  shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-md">
      <p className="text-2xl">Success!!</p>
      <br />
      <br />
      <div className="w-full rounded-md border border-green-400 overflow-hidden">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="p-2 border-b border-r border-green-400">
                Username
              </th>
              <th className="p-2 border-b border-green-400">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-r border-green-400">
                {state.formState?.username}
              </td>
              <td className="p-2">{state.formState?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Successful;
