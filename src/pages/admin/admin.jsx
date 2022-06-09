import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import memoryUtils from "../../utils/memoryUtils";
// component
import LetNav from "../../components/leftNav/letNav";
import Header from "../../components/header/header";
// pages
// const Home = lazy(() => import("../home/home"));
// const Role = lazy(() => import("../role/role"));
// const User = lazy(() => import("../user/user"));
// const Products = lazy(() => import("../products/products"));
// const BarChart = lazy(() => import("../chart/barChart"));
// const LineChart = lazy(() => import("../chart/lineChart"));
// const PieChart = lazy(() => import("../chart/pieChart"));
// const Category = lazy(() => import("../category/category"));
import Home from "../home/home";
import Role from "../role/role";
import User from "../user/user";
import Products from "../products/products";
import BarChart from "../chart/barChart";
import LineChart from "../chart/lineChart";
import PieChart from "../chart/pieChart";
import Category from "../home/home";

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
        <Content style={{ backgroundColor: "#fff" }}>
          <Switch>
            <Route to="/" component={Home}></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>For Practice</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
