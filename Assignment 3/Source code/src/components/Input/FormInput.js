import React from "react";

const FormInput = ({ type = "text", name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className="border-1 border-black p-2 m-2 input"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default FormInput;
