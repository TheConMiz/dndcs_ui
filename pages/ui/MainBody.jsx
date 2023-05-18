import React from 'react'
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import ListPane from "./ListPane"
import MasterGrid from '../MasterGrid';
import DiceWidget from './DiceWidget';
import { Grid, Paper, Box } from '@mui/material';

const MainBody = () => {

	const drawerWidth = useSelector(state => state.app.settings.drawer_width);
	const sidebar_expand = useSelector(state => state.app.settings.sidebar_expand);

	const MainBody = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
		({ theme, open }) => ({
			display: "flex",
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginRight: `-${drawerWidth}px`,
			...(open && {
				transition: theme.transitions.create('margin', {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen,
				}),
				marginRight: 0,
			}),
			width: `calc(100vw - ${drawerWidth}px)`
		}),
	);

	return (
		<MainBody
			open={true}
		>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: 1,
						width: '100px',
						height: '100px',
					},
				}}
			>
				<Paper
					variant="outlined"
					elevation={6}
				>
					test
				</Paper>

				<Paper
					variant="outlined"
					elevation={4}
				>
					test
				</Paper>

				<Paper
					variant="outlined"
					elevation={2}
				>
					test
				</Paper>
			</Box>
			
		</MainBody>
	)
}

export default MainBody