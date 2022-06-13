// admin.jsx file
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import memoryUtils from "../../utils/memoryUtils";
// component
import LetNav from "../../components/leftNav/leftNav";
import Header from "../../components/header/header";
// pages
import Home from "../home/home";
import Role from "../role/role";
import User from "../user/user";
import Products from "../products/products";
import BarChart from "../chart/barChart";
import LineChart from "../chart/lineChart";
import PieChart from "../chart/pieChart";
import Category from "../category/category";

const { Footer, Sider, Content } = Layout;

const Admin = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <LetNav></LetNav>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/role" component={Role}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/category" component={Category}></Route>
            <Route path="/charts/barchat" component={BarChart}></Route>
            <Route path="/charts/linechart" component={LineChart}></Route>
            <Route path="/charts/piechart" component={PieChart}></Route>
            {/* <Redirect to="/home" /> */}
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>For Practice</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
