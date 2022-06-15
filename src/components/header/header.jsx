import React, { useEffect } from "react";
import { formateDate } from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import { HeaderStyle, HeaderTopStyle, HeaderBottomStyle } from "./headerStyle";

const Header = () => {
  const currentTime = formateDate(Date.now());
  console.log(memoryUtils);
  // useEffect(() => {
  //   set
  // }, [])
  return (
    <HeaderStyle>
      <HeaderTopStyle>
        <span>歡迎，admin</span>
        <a href="javascript:;">退出</a>
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
