import React from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import memoryUtils from "../../utils/memoryUtils";
// component
import LetNav from "../../components/leftNav/letNav";
import Header from "../../components/header/header";

const { Footer, Sider, Content } = Layout;
const Admin = () => {
  const user = memoryUtils.user;
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <LetNav></LetNav>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{ backgroundColor: "#fff" }}>Content</Content>
        <Footer style={{ textAlign: "center" }}>For Practice</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
