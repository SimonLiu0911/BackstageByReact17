import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

import { LoginStyle, HeaderStyle, SectionStyle, FormStyle } from "./loginStyle";

const Login = () => {
	const [form] = Form.useForm();
	const onCheck = async () => {
		try {
			const values = await form.validateFields();
			console.log('Success:', values);
		} catch (errorInfo) {
			console.log('Failed:', errorInfo);
		}
	};

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
							wrapperCol={{
								span: 16,
							}}
							initialValues={{
								remember: true,
							}}
							autoComplete="off"
						>
							<Form.Item
								name="username"
								rules={[
									{
										required: true,
										message: 'Please input your username!',
									},
								]}
							>
								<Input
									prefix={<UserOutlined className="site-form-item-icon" />}
									placeholder="Username"
								/>
							</Form.Item>

							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: 'Please input your password!',
									},
								]}
							>
								<Input.Password
									prefix={<UnlockOutlined className="site-form-item-icon" />}
									placeholder="Password"
								// onChange={(e) => setUser({
								// 	...user,
								// 	password: e.target.value
								// })}
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


// class Login extends Component {
// 	render() {
// 		return (
// 			<LoginStyle className="login">
// 				<HeaderStyle className='login-header'>
// 					<header>
// 						<h1>後台管理系統</h1>
// 					</header>
// 				</HeaderStyle>
// 				<SectionStyle>
// 					<section className='login-content'>
// 						<h2>用戶登入</h2>
// 						<FormStyle>
// 							<Form
// 								name="basic"
// 								wrapperCol={{
// 									span: 16,
// 								}}
// 								initialValues={{
// 									remember: true,
// 								}}
// 								// onFinish={onFinish}
// 								// onFinishFailed={onFinishFailed}
// 								autoComplete="off"
// 							>
// 								<Form.Item
// 									name="username"
// 									rules={[
// 										{
// 											required: true,
// 											message: 'Please input your username!',
// 										},
// 									]}
// 								>
// 									<Input placeholder="Username" />
// 								</Form.Item>

// 								<Form.Item
// 									name="password"
// 									rules={[
// 										{
// 											required: true,
// 											message: 'Please input your password!',
// 										},
// 									]}
// 								>
// 									<Input.Password placeholder="Password" />
// 								</Form.Item>

// 								<Form.Item>
// 									<Button type="primary" htmlType="submit">
// 										Login
// 									</Button>
// 								</Form.Item>
// 							</Form>
// 						</FormStyle>
// 					</section>
// 				</SectionStyle>
// 			</LoginStyle>
// 		);
// 	}
// }

export default Login;
