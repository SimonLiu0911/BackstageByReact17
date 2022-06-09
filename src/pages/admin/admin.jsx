import React from 'react';
import { Redirect } from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';

const Admin = () => {
	const user = memoryUtils.user;
	if (!user) {
		return <Redirect to="/login" />
	}
	return (
		<div>
			Admin {user.email}
		</div>
	);
}

export default Admin;
