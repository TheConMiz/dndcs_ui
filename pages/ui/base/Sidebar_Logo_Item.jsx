import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar } from '@mui/material';
import { Box, Menu, MenuItem, IconButton, Typography, MenuIcon
 } from '@mui/system';

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
// 	<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// 	<IconButton
// 		size="large"
// 		aria-label="account of current user"
// 		aria-controls="menu-appbar"
// 		aria-haspopup="true"
// 		// onClick={handleOpenNavMenu}
// 		color="inherit"
// 	>
// 		<MenuIcon />
// 	</IconButton>
// 	<Menu
// 		id="menu-appbar"
// 		// anchorEl={anchorElNav}
// 		anchorOrigin={{
// 			vertical: 'bottom',
// 			horizontal: 'left',
// 		}}
// 		keepMounted
// 		transformOrigin={{
// 			vertical: 'top',
// 			horizontal: 'left',
// 		}}
// 		// open={Boolean(anchorElNav)}
// 		// onClose={handleCloseNavMenu}
// 		sx={{
// 			display: { xs: 'block', md: 'none' },
// 		}}
// 	>
// 		{pages.map((page) => (
// 			<MenuItem key={page} onClick={handleCloseNavMenu}>
// 				<Typography textAlign="center">{page}</Typography>
// 			</MenuItem>
// 		))}
// 	</Menu>
// </Box>
	)
}

export default Sidebar_Logo_Item