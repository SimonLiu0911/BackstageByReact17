import React from "react";
import { Card, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const dataSource = [
  {
    key: "1",
    name: "Mike",
  },
  {
    key: "2",
    name: "John",
  },
];

const columns = [
  {
    title: "分類名稱",
    dataIndex: "name",
  },
  {
    title: "操作",
    width: 300,
    render: () => (
      <span>
        <Button>修改分類</Button>
        <Button>查看子分類</Button>
      </span>
    ),
  },
];

const Category = () => {
  const handleAdd = () => {
    console.log(1);
  };
  const title = "一級分類表";
  const extra = (
    <Button type="primary" onClick={handleAdd}>
      <PlusOutlined />
      新增
    </Button>
  );

  return (
    <div>
      <Card title={title} extra={extra}>
        <Table dataSource={dataSource} columns={columns} bordered />
      </Card>
    </div>
  );
};

export default Category;
