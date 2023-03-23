import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
import PetsIcon from '@mui/icons-material/Pets';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HikingIcon from '@mui/icons-material/Hiking';
import Sidebar_Item from './base/Sidebar_Item';
import Sidebar_Logo_Item from './base/Sidebar_Logo_Item';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_SIDEBAR_EXPAND, UPDATE_SETTINGS_TOGGLE } from './../../actions/app_actions';


const Sidebar = () => {

	const drawerWidth = useSelector(state => state.app.settings.drawer_width);
	
	const sidebar_expand = useSelector(state => state.app.settings.sidebar_expand);

	const settings_toggle = useSelector(state => state.app.settings_toggle);

	const dispatch = useDispatch();

	const toggleSidebar = () => {
		let new_toggle = !sidebar_expand
		dispatch({ type: UPDATE_SIDEBAR_EXPAND, payload: new_toggle });
	}

	const toggleSettings = () => {
		let new_toggle = !settings_toggle
		dispatch({ type: UPDATE_SETTINGS_TOGGLE, payload: new_toggle });
	}

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

	const sidebar_items_data = [
		{
			"name": "Overview",
			"tooltip": "Overview",
			"icon": <DashboardIcon />,
			"onHover": "",
			"onClick": ""
		},
		{
			"name": "Character",
			"tooltip": "Character",
			"icon": <HikingIcon />,
			"onHover": "",
			"onClick": ""
		},
		{
			"name": "Spells",
			"tooltip": "Spells",
			"icon": <AutoFixHighIcon />,
			"onHover": "",
			"onClick": ""
		},
		{
			"name": "Equipment",
			"tooltip": "Equipment",
			"icon": <FaceRetouchingNaturalIcon />,
			"onHover": "",
			"onClick": ""
		},
		{
			"name": "Companions",
			"tooltip": "Companions",
			"icon": <PetsIcon />,
			"onHover": "",
			"onClick": ""
		}
	];

	const settings_items = [
		{
			"name": "Light Mode",
			"tooltip": "Light Mode",
			"icon": <LightModeIcon />,
			"onHover": "",
			"onClick": "",
			"disabled": true
		},
		{
			"name": "Settings",
			"tooltip": "Settings",
			"icon": <SettingsIcon />,
			"onHover": "",
			"onClick": toggleSettings,
			"disabled": false
		},
		{
			"name": "Expand",
			"tooltip": "Expand",
			"icon": sidebar_expand ? <ChevronLeftIcon /> : <ChevronRightIcon />,
			"onHover": "",
			"onClick": toggleSidebar,
			// "disabled": true
		},
	];

	return (
		<Drawer variant="permanent" open={sidebar_expand}>
			{/* 
				Org. Cows Logo
			*/}
			<List>
				<Sidebar_Logo_Item />
			</List>

			<Divider />

			{/* 
				Main Pages
			*/}

			<List>
				{
					sidebar_items_data.map((item) => {
						return (
							<Sidebar_Item
								key={item.name}
								data={item}
								expand={sidebar_expand}
							/>
						)
					})
				}
			</List>

			<Divider />

			<List>
				{
					settings_items.map((item) => {
						return (
							<Sidebar_Item
								key={item.name}
								data={item}
								disabled={item.disabled}
							/>
						)
					})
				}
			</List>

		</Drawer>
	);
}

export default Sidebar
