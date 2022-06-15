import React, { useState, useEffect } from "react";
import { formateDate } from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import { HeaderStyle, HeaderTopStyle, HeaderBottomStyle } from "./headerStyle";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(formateDate(Date.now()));
  const user = memoryUtils.user;
  console.log(user);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(formateDate(Date.now()));
    }, 1000);
    // setInterval(() => {
    //   setCurrentTime(formateDate(Date.now()));
    // }, 1000);
  }, [currentTime]);

  return (
    <HeaderStyle>
      <HeaderTopStyle>
        <span>歡迎，admin</span>
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

export default Header;
