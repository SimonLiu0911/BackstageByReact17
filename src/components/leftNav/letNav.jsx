import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LeftNavStyle, HeaderStyle } from "./letNavStyled";
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
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("首頁", "1", <HomeOutlined />),
  getItem("用戶管理", "2", <DesktopOutlined />),
  getItem("角色管理", "3", <UserOutlined />),
  getItem("商品", "sub1", <AppstoreOutlined />, [
    getItem("品類管理", "4"),
    getItem("商品管理", "5"),
  ]),
  getItem("圖形圖表", "sub2", <FundOutlined />, [
    getItem("柱形圖", "6", <BarChartOutlined />),
    getItem("折線圖", "7", <LineChartOutlined />),
    getItem("圓餅圖", "8", <PieChartOutlined />),
  ]),
];

const LetNav = () => {
  return (
    <div>
      <Link to="/">
        <LeftNavStyle>
          <HeaderStyle>
            <h1>管理中心</h1>
          </HeaderStyle>
        </LeftNavStyle>
      </Link>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default LetNav;
