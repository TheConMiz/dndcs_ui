import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import MainBody from './MainBody';
import Full_Size_Dialog from './base/Full_Size_Dialog';

const UIBody = () => {
	const sx_content = {
		width: "100vw",
		height: "100vh",
		backgroundColor: 'primary.dark',
        paddingTop: 2,
		flexGrow: 1,
		display: "flex"
	}

	return (
		<Box
			component="main"
			sx={sx_content}
		>
			
			<Sidebar />
			<MainBody />
			
			<Full_Size_Dialog/>
		</Box>
	)
}
export default UIBody

