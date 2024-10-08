import React from "react";

const FileUpload = ({ name, label, accept, onChange }) => (
  <div className="form-group">
    <div className="title-color mb-2 d-flex gap-1 align-items-center">
      {label}
    </div>
    <div className="custom-file text-left">
      <input
        type="file"
        name={name}
        id={`${name}Input`}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
        accept={accept}
        onChange={onChange}
      />
      <label className="custom-file-label" htmlFor={`${name}Input`}>
        Upload {label.toLowerCase()}
      </label>
    </div>
  </div>
);

export default FileUpload;
