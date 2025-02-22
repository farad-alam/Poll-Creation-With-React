import React from "react";

function Input(props) {
  const { type, name, placeholder, label } = props;
  return (
    <>
      <label htmlFor={name}>{label || ""}</label>
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder || "Enter Something"}
        className="input input-sm w-full block"
      />
    </>
  );
}

export default Input;
