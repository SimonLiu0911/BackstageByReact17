// import {
//   HomeOutlined,
//   AppstoreOutlined,
//   UserOutlined,
//   DesktopOutlined,
//   PieChartOutlined,
//   FundOutlined,
//   LineChartOutlined,
//   BarChartOutlined,
// } from "@ant-design/icons";

const menuList = [
  {
    title: "首頁",
    key: "/home",
    icon: "home",
    path: "/home"
  },
  {
    title: "商品",
    key: "/products",
    icon: "Home",
    children: [
      {
        title: "品類管理",
        key: "/category",
        icon: "bars",
      },
      {
        title: "商品管理",
        key: "/product",
        icon: "tool",
      },
    ],
  },

  {
    title: "用户管理",
    key: "/user",
    icon: "user",
  },
  {
    title: "角色管理",
    key: "/role",
    icon: "safety",
  },

  {
    title: "圖形圖表",
    key: "/charts",
    icon: "area-chart",
    children: [
      {
        title: "柱形圖",
        key: "/charts/bar",
        icon: "bar-chart",
      },
      {
        title: "折線圖",
        key: "/charts/line",
        icon: "line-chart",
      },
      {
        title: "圓餅圖",
        key: "/charts/pie",
        icon: "pie-chart",
      },
    ],
  },
  {
    title: "訂單管理",
    key: "/order",
    icon: "windows",
  },
];

export default menuList;
