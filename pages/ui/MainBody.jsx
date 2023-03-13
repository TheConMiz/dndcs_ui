import React from 'react'
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const MainBody = () => {

	const drawerWidth = useSelector(state => state.app.settings.drawer_width);
	const sidebar_expand = useSelector(state => state.app.settings.sidebar_expand);

	const MainBody = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
		({ theme, open }) => ({
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
			// width: `calc(100vw - ${drawerWidth}px)`
		}),
	);

	return (
		<MainBody
			open={!sidebar_expand}
		>
			<Typography>daslkmmadklkmldaklmasdmkldaskmlas</Typography>
			{/* <ListPane/> */}
		</MainBody>
	)
}

export default MainBody