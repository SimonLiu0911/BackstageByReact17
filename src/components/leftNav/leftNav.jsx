import React from "react";
import { Link, withRouter } from "react-router-dom";
import { LeftNavStyle, HeaderStyle } from "./leftNavStyled";
// import menuList from "../../config/menuConfig";
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


const LetNav = (props) => {
  const path = props.location.pathname;
  return (
    <div>
      <Link to="/">
        <LeftNavStyle>
          <HeaderStyle>
            <h1>管理中心</h1>
          </HeaderStyle>
        </LeftNavStyle>
      </Link>
      {/* TODO (35)selectedKeys要改*/}
	  {/* defaultOpenKeys={["/charts"]} */}
      <Menu
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        mode="inline"
        theme="dark">
        <Menu.Item key="/home" icon={<HomeOutlined />}>
          <Link to="/home">首頁</Link>
        </Menu.Item>
        <Menu.Item key="/role" icon={<DesktopOutlined />}>
          <Link to="/role">用戶管理</Link>
        </Menu.Item>
        <Menu.Item key="/user" icon={<UserOutlined />}>
          <Link to="/user">角色管理</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="/productsManage"
          title="商品"
          icon={<AppstoreOutlined />}
        >
          <Menu.Item key="/category">
            <Link to="/category">品類管理</Link>
          </Menu.Item>
          <Menu.Item key="/products">
            <Link to="/products">商品管理</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="/charts" title="圖形圖表" icon={<FundOutlined />}>
          <Menu.Item key="/charts/barchart" icon={<BarChartOutlined />}>
            <Link to="/charts/barchart">柱形圖</Link>
          </Menu.Item>
          <Menu.Item key="/charts/linechart" icon={<LineChartOutlined />}>
            <Link to="/charts/linechart">折線圖</Link>
          </Menu.Item>
          <Menu.Item key="/charts/piechart" icon={<PieChartOutlined />}>
            <Link to="/charts/piechart">圓餅圖</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default withRouter(LetNav);
