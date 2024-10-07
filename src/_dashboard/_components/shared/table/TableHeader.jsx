import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="py-2 px-4 border-b">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;
