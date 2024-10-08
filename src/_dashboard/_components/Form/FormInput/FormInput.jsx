import React, { forwardRef } from "react";

const FormInput = forwardRef(
  ({ label, name, type, placeholder, required }, ref) => (
    <div className="form-group">
      <label
        htmlFor={name}
        className="title-color d-flex gap-1 align-items-center"
      >
        {label}
      </label>
      <input
        ref={ref} // Forward the ref to the input element
        type={type}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
);

export default FormInput;
