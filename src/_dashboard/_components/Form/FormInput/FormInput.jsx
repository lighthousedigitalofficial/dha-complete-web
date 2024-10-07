import React from "react";

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="form-group">
    <label
      htmlFor={name}
      className="title-color d-flex gap-1 align-items-center"
    >
      {label}
    </label>
    <input
      type={type}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
