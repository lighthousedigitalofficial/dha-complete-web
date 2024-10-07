import React from "react";
import { Table } from "antd";
import styles from "./Table.module.css";

const DataTable = ({ columns, data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record._id} // Use a unique key if available
      pagination={{ pageSize: 5 }}
      loading={!data.length}
      className={styles.customTableHeader} // Apply custom header class
    />
  );
};

export default DataTable;
