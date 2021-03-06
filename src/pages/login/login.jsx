import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
// style
import { LoginStyle, HeaderStyle, SectionStyle, FormStyle } from "./loginStyle";
// ajax
import { reqLogin } from '../../assets/api';
// utils
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';

const Login = (props) => {
	const [form] = Form.useForm();
	// 如果用戶已經登入，自動跳轉到管理頁面
	// const user = memoryUtils.user;
	// if (!user) {
	// 	return <Redirect to="/login" />
	// }
	const onCheck = async () => {
		try {
			props.history.replace("/");
		} catch (errorInfo) {
			console.log('Failed:', errorInfo.response);
		}
	};

	useEffect(() => {
		sessionStorage.clear();
	}, [])

	return (
		<LoginStyle className="login">
			<HeaderStyle className='login-header'>
				<header>
					<h1>後台管理系統</h1>
				</header>
			</HeaderStyle>
			<SectionStyle>
				<section className='login-content'>
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
										message: 'Please input your email!',
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
										message: 'Please input your password!',
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
								<Button type="primary" onClick={onCheck}>
									Login
								</Button>
							</Form.Item>
						</Form>
					</FormStyle>
				</section>
			</SectionStyle>
		</LoginStyle>
	);
}

export default Login;
