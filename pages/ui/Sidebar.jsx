import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';


import UIBody from './UIBody';

const drawerWidth = 200;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

const Sidebar = () => {
	const [expand, setExpand] = useState(false);

	const toggleSidebar = () => {
		expand ? setExpand(false) : setExpand(true);
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer variant="permanent" open={expand}>
				<div style={{height: "50px"}}></div>				

				<Divider />
				
				<List>
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: expand ? 'initial' : 'center',
								px: 2.5,
							}}
							onClick={toggleSidebar}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								{expand ? <ChevronLeftIcon /> : <ChevronRightIcon />}

							</ListItemIcon>
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: expand ? 'initial' : 'center',
								px: 2.5,
							}}
							// onClick={}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								<LightModeIcon/>

							</ListItemIcon>
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: expand ? 'initial' : 'center',
								px: 2.5,
							}}
							// onClick={toggleSidebar}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								<SettingsIcon/>

							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					
				</List>
			</Drawer>

			<UIBody/>

		</Box>
	);
}

export default Sidebar
