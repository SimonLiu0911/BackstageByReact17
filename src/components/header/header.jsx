import React from "react";
import { HeaderStyle, HeaderTopStyle,HeaderBottomStyle } from "./headerStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTopStyle>
        <span>歡迎，admin</span>
        <a href="javascript:;">退出</a>
      </HeaderTopStyle>
      <HeaderBottomStyle>
        <div className="header-bottom-left">首頁</div>
        <div className="header-bottom-right">
          <span>2020-01-01</span>
          <span>晴</span>
        </div>
      </HeaderBottomStyle>
    </HeaderStyle>
  );
};

export default Header;
