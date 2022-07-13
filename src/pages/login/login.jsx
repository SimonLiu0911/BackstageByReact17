import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
// style
import { LoginStyle, HeaderStyle, SectionStyle, FormStyle } from "./loginStyle";
// ajax
import { reqLogin, reqToken } from "../../assets/api";
// utils
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
// plugin

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  // 如果用戶已經登入，自動跳轉到管理頁面
  //   const user = memoryUtils.user;
  //   if (!user) {
  //     return <Redirect to="/login" />;
  //   }

  const onCheck = async () => {
    setIsLoading(true);
    try {
      const values = await form.validateFields();
      const { email, password } = values;
      const response = await reqLogin(email, password);
      if (response.data.success) {
        const user = {
          email,
          token: response.data.token,
        };
        memoryUtils.user = user;
        storageUtils.saveUser(user);
        props.history.replace("/");
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <LoginStyle className="login">
      <HeaderStyle className="login-header">
        <header>
          <h1>後台管理系統</h1>
        </header>
      </HeaderStyle>
      <SectionStyle>
        <section className="login-content">
          <h2>用戶登入</h2>
          <FormStyle>
            <Form
              form={form}
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                    whitespace: true,
                  },
                ]}
              >
                <Input.Password
                  prefix={<UnlockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" onClick={onCheck} loading={isLoading}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </FormStyle>
        </section>
      </SectionStyle>
    </LoginStyle>
  );
};

export default Login;
