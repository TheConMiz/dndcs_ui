import React, {useState} from 'react';
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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PetsIcon from '@mui/icons-material/Pets';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HikingIcon from '@mui/icons-material/Hiking';

import { Avatar, Tooltip } from '@mui/material';
import Sidebar_Item from './base/Sidebar_Item';
import Sidebar_Logo_Item from './base/Sidebar_Logo_Item';

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



const Sidebar = (props) => {
	const [expand, setExpand] = useState(false);

	const toggleSidebar = () => {
		expand ? setExpand(false) : setExpand(true);
	}

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
			"onClick": ""
		},
		{
			"name": "Settings",
			"tooltip": "Settings",
			"icon": <SettingsIcon />,
			"onHover": "",
			"onClick": ""
		},
		{
			"name": "Expand",
			"tooltip": "Expand",
			"icon": expand ? <ChevronLeftIcon /> : <ChevronRightIcon/>,
			"onHover": "",
			"onClick": toggleSidebar
		},
	];

	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer variant="permanent" open={expand}>
				{/* 
					Org. Cows Logo
				*/}
				<List>
					<Sidebar_Logo_Item/>
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
									expand={expand}
								/>
							)	
						})
					}
				</List>
			
				<Divider/>
				
				<List>
					{
						settings_items.map((item) => {
							return (
								<Sidebar_Item
									key={item.name}
									data={item}
									expand={expand}
								/>
							)	
						})
					}
				</List>

			</Drawer>
			
			{props.children}
			
		</Box>
	);
}

export default Sidebar
