import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import MainBody from './MainBody';

const UIBody = () => {
	return (
		<Box
			component="main"
			sx={sx_content}
		>
			<Sidebar />
			<MainBody/>
		</Box>
	)
}
export default UIBody

