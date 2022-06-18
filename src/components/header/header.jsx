import React, { useState, useEffect } from "react";
import { formateDate } from "../../utils/dateUtils";
import { withRouter } from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import menuList from "../../config/menuConfig";
import { Modal, Button } from "antd";
import { HeaderStyle, HeaderTopStyle, HeaderBottomStyle } from "./headerStyle";

const Header = (props) => {
  const [currentTime, setCurrentTime] = useState(formateDate(Date.now()));
  const [user, setUser] = useState(memoryUtils.user);
  const [title, setTitle] = useState("首頁");
  const path = props.location.pathname;

  const getTitle = () => {
    menuList.forEach((item) => {
      if (item.key === path) {
        setTitle(item.title);
      } else if (item.children) {
        const cItem = item.children.find((cItem) => {
          return cItem.key === path;
        });
        if (cItem) {
          setTitle(cItem.title);
        }
      }
    });
  };

  const logout = () => {
    Modal.confirm({
      title: "Confirm",
      content: "確定是否要登出",
      okText: "登出",
      cancelText: "取消",
      onOk() {
        props.history.replace("/login");
      },
    });
  };

  useEffect(() => {
    getTitle();
  }, [path]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(formateDate(Date.now()));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentTime]);

  return (
    <HeaderStyle>
      <HeaderTopStyle>
        <span>歡迎, {user.email}</span>
        <Button onClick={logout}>退出</Button>
      </HeaderTopStyle>
      <HeaderBottomStyle>
        <div className="header-bottom-left">{title}</div>
        <div className="header-bottom-right">
          <span>{currentTime}</span>
          <span>晴</span>
        </div>
      </HeaderBottomStyle>
    </HeaderStyle>
  );
};

export default withRouter(Header);
