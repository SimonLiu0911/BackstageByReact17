import React from "react";
import { Card, Select, Input, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const ProductHome = () => {
  const title = (
    <span>
      <Select value="1" style={{ width: 150 }}>
        <Option value="1">按名稱搜索</Option>
        <Option value="2">按描述搜索</Option>
      </Select>
      <Input placeholder="關鍵字" style={{ width: 150, margin: "0 15px" }} />
      <Button type="primary">Search</Button>
    </span>
  );
  const dataSource = [
    {
      key: "1",
      name: "商品A",
      desc: "10 Downing Street",
    },
    {
      key: "2",
      name: "商品B",
      desc: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "商品名稱",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "商品描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "價格",
      dataIndex: "price",
      key: "price",
      render: (price) => "$" + price,
    },
    {
      title: "狀態",
      dataIndex: "status",
      key: "status",
	  width: 100,
      render: (status) => {
        return (
          <span>
            <Button type="primary">下架</Button>
            <span>在售</span>
          </span>
        );
      },
    },
    {
      title: "操作",
	  width: 200,
      render: (product) => {
        return (
          <span>
            <Button>詳情</Button>
            <Button>修改</Button>
          </span>
        );
      },
    },
  ];
  const extra = (
    <Button type="primary">
      <PlusOutlined />
      添加商品
    </Button>
  );
  return (
    <Card title={title} extra={extra}>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};

export default ProductHome;
