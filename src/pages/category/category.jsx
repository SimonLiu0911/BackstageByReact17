import React, { useEffect, useState } from "react";
import { Card, Button, Table, Modal, Input, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { reqCategories, reqUpdateCategories, reqAddCategories } from "../../assets/api";
import { nanoid } from 'nanoid'

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [parentId, setParentId] = useState("0");
  const [parentName, setParentName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [optionedCategory, setOptionedCategory] = useState({});
  const [modalState, setModalState] = useState(null);
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
      render: (category) => (
        <span>
          <Button onClick={() => updateCategory(category)}>修改分類</Button>
          {parentId === "0" ? (
            <Button onClick={() => showSubCategory(category)}>
              查看子分類
            </Button>
          ) : null}
        </span>
      ),
    },
  ];
  const updateCategory = (category) => {
    setModalState(0)
    setCategoryName(category.name);
    setOptionedCategory(category)
    setIsModalVisible(true);
  };
  const handleConfirm = async () => {
    setIsModalVisible(false);
    if (modalState === 0) {
        const result = await reqUpdateCategories(optionedCategory.id, categoryName)
    } else {
        reqAddCategories(nanoid(), categoryName)
    }
    // setCategoryName("")
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setCategoryName("");
  };
  const inputCategory = (e) => {
    setCategoryName(e.target.value);
  };
  // 顯示指定一級分類對象的二子列表
  const showSubCategory = (category) => {
    console.log("tirgger showSubCategory");
    setParentName(category.name);
    setParentId(category.parentId);
  };
  // 新增類別
  const addCategory = () => {
    setModalState(1)
    setIsModalVisible(true);
  }

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
    <Button type="primary" onClick={addCategory}>
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
        <Modal
          title={modalState === 0 ? "修改分類" : "新增分類"}
          visible={isModalVisible}
          okText="Confirm"
          onOk={() => {
            if (categoryName) {
              handleConfirm();
              setCategoryName("")
            } else {
                message.error('請輸入分類');
            }
          }}
          onCancel={handleCancel}
        >
          <Input
            placeholder="請輸入分類"
            value={categoryName}
            onChange={inputCategory}
          />
        </Modal>
      </Card>
    </div>
  );
};

export default Category;
