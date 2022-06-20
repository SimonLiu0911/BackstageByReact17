import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { formateDate } from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import menuList from "../../config/menuConfig";
import { Modal, Button } from "antd";
import { HeaderStyle, HeaderTopStyle, HeaderBottomStyle } from "./headerStyle";

const Header = (props) => {
  const [currentTime, setCurrentTime] = useState(formateDate(Date.now()));
  const [user, setUser] = useState(memoryUtils.user);
  const [title, setTitle] = useState("首頁");
  const timer = useRef(null)
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

  const handleLogout = () => {
    // 跳出 Modal
    Modal.confirm({
      title: "Confirm",
      content: "確定是否要登出",
      okText: "登出",
      cancelText: "取消",
      onOk() {
        // call logout api
        setUser({});
        props.history.replace("/login");
      },
    });
  };

  useEffect(() => {
    getTitle();
  }, [path]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrentTime(formateDate(Date.now()));
    }, 1000);

    return () => {
      clearInterval(timer.current)
    }
  });

  return (
    <HeaderStyle>
      <HeaderTopStyle>
        <span>歡迎, {user.email}</span>
        <Button onClick={handleLogout}>退出</Button>
      </HeaderTopStyle>
      <HeaderBottomStyle>
        <div className="header-bottom-left">{title}</div>
        <div className="header-bottom-right">
          <span>{currentTime}</span>
          {/* <span>晴</span> */}
        </div>
      </HeaderBottomStyle>
    </HeaderStyle>
  );
};

export default withRouter(Header);
