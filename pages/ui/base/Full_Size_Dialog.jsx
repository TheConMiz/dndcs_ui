import React, {useState} from 'react'
import { Dialog, Slide, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, ListItem, List, ListItemButton, Radio, ToggleButton, Switch, ListItemText } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_DARK_MODE, UPDATE_SETTINGS_TOGGLE } from './../../../actions/app_actions';


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="right" ref={ref} {...props} />;
});

const Full_Size_Dialog = (props) => {
	const dispatch = useDispatch();
	
	const settings_toggle = useSelector(state => state.app.settings.settings_toggle);
	const dark_mode = useSelector(state => state.app.settings.dark_mode);

	const toggleSettings = () => {
		let new_toggle = !settings_toggle
		dispatch({ type: UPDATE_SETTINGS_TOGGLE, payload: new_toggle });
	}
	
	const toggleDarkMode = () => {
		let new_toggle = !dark_mode
		dispatch({ type: UPDATE_DARK_MODE, payload: new_toggle });
	}

	return (
		<Dialog
			open={settings_toggle}
			// TransitionComponent={Transition}
			onClose={toggleSettings}
			keepMounted
			// onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>{"Settings"}</DialogTitle>
			
			<DialogContent
				dividers={true}
			>
				<List>
					<ListItem>
					
						<ListItemText>
							Dark Mode
						</ListItemText>

						<Switch
							checked={dark_mode}
							onChange={toggleDarkMode}
						></Switch>
						
					</ListItem>
					<ListItem>

						<ListItemButton>
							Something Else
						</ListItemButton>
					</ListItem>
				</List>
				<DialogContentText id="alert-dialog-slide-description">
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button>Disagree</Button>
				<Button>Agree</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Full_Size_Dialog