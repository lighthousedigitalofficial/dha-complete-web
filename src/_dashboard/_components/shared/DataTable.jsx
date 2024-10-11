import { Table } from 'antd'
const DataTable = ({ columns, data }) => {
    return (
        <div className="overflow-x-auto">
            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => record._id} // Use a unique key if available
                pagination={{ pageSize: 5 }}
                loading={!data?.length}
                className="" // Apply custom header class
            />
        </div>
    )
}

export default DataTable
