import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { formateDate } from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import { HeaderStyle, HeaderTopStyle, HeaderBottomStyle } from "./headerStyle";

const Header = (props) => {
  console.log(props);
  const [currentTime, setCurrentTime] = useState(formateDate(Date.now()));
  const [userInfo, setUserInfo] = useState(memoryUtils.user);
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrentTime(formateDate(Date.now()));
    }, 1000);

    return () => {
      clearInterval(timer.current)
    }
  }, [currentTime]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentTime(formateDate(Date.now()));
  //   }, 1000);
  // }, [currentTime]);

  return (
    <HeaderStyle>
      <HeaderTopStyle>
        <span>歡迎, {userInfo.email}</span>
        <a href="#">退出</a>
      </HeaderTopStyle>
      <HeaderBottomStyle>
        <div className="header-bottom-left">首頁</div>
        <div className="header-bottom-right">
          <span>{currentTime}</span>
          <span>晴</span>
        </div>
      </HeaderBottomStyle>
    </HeaderStyle>
  );
};

export default withRouter(Header);
