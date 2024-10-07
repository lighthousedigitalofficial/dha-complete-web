import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ children }) => {
  return (
    <td className="py-3 px-4 border-b">
      {children}
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableCell;