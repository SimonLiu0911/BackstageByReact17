import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const Admin = () => {
  const user = memoryUtils.user;
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
