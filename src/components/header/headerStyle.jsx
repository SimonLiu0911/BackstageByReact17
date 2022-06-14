import styled from "@emotion/styled";

export const HeaderStyle = styled.div`
  height: 80px;
  background-color: #fff;
`;

export const HeaderTopStyle = styled.div`
  border-bottom: 1px solid #1da57a;
  height: 40px;
  text-align: right;
  line-height: 40px;
  padding-right: 30px;
  span {
    margin-right: 10px;
  }
`;

export const HeaderBottomStyle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  .header-bottom-left {
    width: 25%;
    text-align: center;
}
.header-bottom-right {
	width: 75%;
    text-align: right;
	padding-right: 30px;
  }
`;
