import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ children }) => {
  return (
    <table className="min-w-full bg-white">
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;