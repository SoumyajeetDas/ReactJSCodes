import React from 'react';

const Input: React.FC<{
  type: string;
  placeholder: string;
  id: string;
  handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, placeholder, id, handleFormData }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={handleFormData}
    />
  );
};

export default Input;
