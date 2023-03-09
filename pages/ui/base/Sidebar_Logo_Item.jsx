import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar } from '@mui/material';

const Sidebar_Logo_Item = () => {
	return (
		<ListItem disablePadding sx={{ display: 'block' }}>
		<ListItemButton
			sx={{
				minHeight: 48,
				justifyContent: 'initial',
				// justifyContent: expand ? 'initial' : 'center',
				px: 1.5,
			}}
		>
			<Avatar
				src=""
				alt='Organised Cows'
				sx={{
					minWidth: 0,
					mr: 'auto',
					justifyContent: 'center',
				}}
			/>
			
		</ListItemButton>
	</ListItem>
	)
}

export default Sidebar_Logo_Item