import React, {useState} from 'react'
import { Dialog, Slide, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, ListItem, List, ListItemButton, Radio, ToggleButton, Switch, ListItemText } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="right" ref={ref} {...props} />;
});

const Full_Size_Dialog = (props) => {
	const open = props.open
	
	const settings_toggle = useSelector(state => state.app.settings_toggle);


	const toggleSettings = () => {
		
	}
	
	return (
		<Dialog
			open={settings_toggle}
			TransitionComponent={Transition}
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
							
							checked={false}
						></Switch>
						
					</ListItem>
					<ListItem>

						<ListItemButton>
							Something Else
						</ListItemButton>
					</ListItem>
				</List>
				<DialogContentText id="alert-dialog-slide-description">
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
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