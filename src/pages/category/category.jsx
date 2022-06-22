import React, { useEffect, useState } from "react";
import { Card, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { reqCategories } from "../../assets/api";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [parentId, setParentId] = useState("0");
  const [parentName, setParentName] = useState("");
  const getCategories = async () => {
    setIsLoading(true);
    const response = await reqCategories(parentId);
    if (parentId === "0") {
      setCategories(response.data);
    } else {
      setSubCategories(response.data);
    }
    setIsLoading(false);
  };
  const columns = [
    {
      title: "分類名稱",
      dataIndex: "name",
    },
    {
      title: "操作",
      width: 300,
      render: (categories) => (
        <span>
          <Button>修改分類</Button>
          {parentId === "0" ? (
            <Button onClick={() => showSubCategories(categories)}>
              查看子分類
            </Button>
          ) : null}
        </span>
      ),
    },
  ];
  // 顯示指定一級分類對象的二子列表
  const showSubCategories = (categories) => {
    setParentName(categories.name);
    setParentId(categories.parentId);
    console.log(parentName, parentId);
  };

  const title =
    parentId === "0" ? (
      "一級分類表"
    ) : (
      <span>
        <Button>一級分類表</Button>
        <span>{parentName}</span>
      </span>
    );
  const extra = (
    <Button type="primary">
      <PlusOutlined />
      新增
    </Button>
  );

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Card title={title} extra={extra}>
        <Table
          dataSource={parentId === "0" ? categories : subCategories}
          columns={columns}
          bordered
          rowKey="id"
          loading={isLoading}
        />
      </Card>
    </div>
  );
};

export default Category;
