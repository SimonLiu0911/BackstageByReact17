import styled from "@emotion/styled";
import { DisplayCenter } from "../../assets/style/lib";

export const LoginStyle = styled.div`
width: 100%;
height: 100%;
`

export const HeaderStyle = styled(DisplayCenter)`
height: 80px;
background-color: rgba(21, 20, 13, 0.5);
font-size: 2rem;
color: #fff;
* {
	margin-top: 0 !important;
	margin-bottom: 0 !important;
}
`

export const SectionStyle = styled.div`
width: 400px;
height: 300px;
background-color: #fff;
margin: 50px auto;
padding: 20px 40px;

.login-content {
  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
}
`

export const FormStyle = styled.div`
form {
  /* margin: 0 auto; */
  button {
    width: 100%;
  }
}
`