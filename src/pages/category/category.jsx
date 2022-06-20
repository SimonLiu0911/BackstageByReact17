import React, { useEffect, useState } from "react";
import { Card, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { reqCategories } from "../../assets/api";

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
        <Button onClick={test}>修改分類</Button>
        <Button>查看子分類</Button>
      </span>
    ),
  },
];

const Category = () => {
  const [category, setCategory] = useState([
    {
      id: "1",
      name: "Mike",
    },
  ]);
  const getCategory = async () => {
    const response = await reqCategories("0");
	setCategory(response.data)
  };
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

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <Card title={title} extra={extra}>
        <Table dataSource={category} columns={columns} bordered rowKey="id" loading={true} />
      </Card>
    </div>
  );
};

export default Category;
