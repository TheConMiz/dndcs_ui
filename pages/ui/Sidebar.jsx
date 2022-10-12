// import React, { Fragment, useState } from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import SettingsIcon from '@mui/icons-material/Settings';
// import { Avatar, Grid } from '@mui/material';
// import IosShareIcon from '@mui/icons-material/IosShare';

// const drawerWidth = 55;

// const sx_drawer = {
//   width: drawerWidth,
//   flexShrink: 0,
//   '& .MuiDrawer-paper': {
//     width: drawerWidth,
//     boxSizing: 'border-box',
//   },
// }

// const sx_content = {
//   width: "100%",
//   height: "100vh",
//   backgroundColor: 'primary.dark',
//   paddingTop: 2,
// }

// const Sidebar = () => {

//   const [expand, setExpand] = useState(false);

//   return (
//     <Fragment>
//       <Drawer
//         sx={sx_drawer}
//         variant="permanent"
//         anchor="left"
//       >

//         <List>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <Avatar
//                   sx={{width: "40px", height: "40px", left:"-7px"}}
//                 >
//                   VV
//                 </Avatar>
//               </ListItemIcon>
//               <ListItemText/>
//             </ListItemButton>
//           </ListItem>
//         </List>

//         <Divider />

//         <List>
//           {['Item1', 'Export', 'Settings'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <IosShareIcon/>
//                 </ListItemIcon>
//                 <ListItemText/>
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />

//         <List>
//           <ListItem
//             disablePadding
//             sx={{anchor: "bottom"}}

//           >
//               <ListItemButton>
//                 <ListItemIcon>
//                   <SettingsIcon/>
//                 </ListItemIcon>
//                 <ListItemText/>
//               </ListItemButton>
//             </ListItem>
//         </List>
//       </Drawer>

//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 0 }}
//       >

//         <Box
//           sx={sx_content}
//         >
//           <Grid
//               sx={{
//                   width: "100%",
//                   height: "100%",
//               }}
//               container
//               direction="row"
//               justifyContent="space-around"
//               alignItems="flex-start"
//           >

//             {/* <ListPane /> */}

//           </Grid>
//         </Box>

//       </Box>
//     </Fragment>
//   );
// }


// export default Sidebar;

import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid } from '@mui/material';

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
	// const theme = useTheme();
	const [expand, setExpand] = useState(false);

	const toggleSidebar = () => {
		expand ? setExpand(false) : setExpand(true);
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer variant="permanent" open={expand}>
				
				<Divider />

				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: expand ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: expand ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: expand ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>

				<Divider />
				
				<DrawerHeader>
					<List>
						<ListItem>
							<IconButton
								sx={{
									minHeight: 48,
									justifyContent: expand ? 'initial' : 'center',
									px: 2.5,
								}}
								onClick={toggleSidebar}
							>
								{expand ? <ChevronLeftIcon /> : <ChevronRightIcon />}
							</IconButton>
						</ListItem>

						<ListItem>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: expand ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<LightModeIcon/>
							</ListItemButton>
						</ListItem>		
						
						<ListItem>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: expand ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<SettingsIcon/>
							</ListItemButton>
						</ListItem>
					</List>
				</DrawerHeader>
			</Drawer>

			<UIBody/>

		</Box>
	);
}

export default Sidebar
