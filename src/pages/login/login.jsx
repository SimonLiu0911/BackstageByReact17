import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
// style
import { LoginStyle, HeaderStyle, SectionStyle, FormStyle } from "./loginStyle";
// ajax
import { reqLogin } from '../../assets/api';

const Login = () => {
	const [form] = Form.useForm();
	const onCheck = async () => {
		try {
			const values = await form.validateFields();
			const {email, password} = values;
			reqLogin(email, password)
			.then(response => {
				console.log('Success', response);
			})
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
									placeholder="email"
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
