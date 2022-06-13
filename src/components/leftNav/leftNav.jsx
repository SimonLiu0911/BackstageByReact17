import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LeftNavStyle, HeaderStyle } from "./leftNavStyled";
import menuList from "../../config/menuConfig";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FundOutlined,
  LineChartOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const LetNav = () => {
  //   const getMenuList = (menuList) => {
  //     return menuList.map((item) => {
  //       if (true) {
  //         return (
  //           <Menu.Item key={item.key}>
  //             <Link to={item.path}>
  //               {item.title}
  //             </Link>
  //           </Menu.Item>
  //         );
  //       }
  //         else {
  //           return (
  //             <Menu.SubMenu key={item.key} title={item.title} icon={item.icon}>
  //               {getMenuList(menuList)}
  //             </Menu.SubMenu>
  //           );
  //         }
  //     });
  //   };
  return (
    <div>
      <Link to="/">
        <LeftNavStyle>
          <HeaderStyle>
            <h1>管理中心</h1>
          </HeaderStyle>
        </LeftNavStyle>
      </Link>
      <Menu defaultSelectedKeys={["home"]} mode="inline" theme="dark">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/home">首頁</Link>
        </Menu.Item>
        <Menu.Item key="role" icon={<DesktopOutlined />}>
          <Link to="/role">用戶管理</Link>
        </Menu.Item>
        <Menu.Item key="user" icon={<UserOutlined />}>
          <Link to="/user">角色管理</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="productsManage"
          title="商品"
          icon={<AppstoreOutlined />}
        >
          <Menu.Item key="category">
            <Link to="/category">品類管理</Link>
          </Menu.Item>
          <Menu.Item key="products">
            <Link to="/products">商品管理</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="charts" title="圖形圖表" icon={<FundOutlined />}>
          <Menu.Item key="barChart" icon={<BarChartOutlined />}>
            <Link to="/charts/barchat">柱形圖</Link>
          </Menu.Item>
          <Menu.Item key="lineChart" icon={<LineChartOutlined />}>
            <Link to="/charts/linechart">折線圖</Link>
          </Menu.Item>
          <Menu.Item key="pieChart" icon={<PieChartOutlined />}>
            <Link to="/charts/piechart">圓餅圖</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default LetNav;
