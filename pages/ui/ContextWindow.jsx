import React, {Fragment} from 'react';
import { useSelector, useDispatch } from "react-redux"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { UPDATE_CONTEXT_TOGGLE } from './../../actions/app_actions';
import { Box } from '@mui/system';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));


const CustomizedDialogs = () => {
	const highlighted_spell = useSelector(state => state.app.highlighted_spell);
	const context_toggle = useSelector(state => state.app.settings.context_toggle);
	
	const toggle_context_menu = () => {
		dispatch({ type: UPDATE_CONTEXT_TOGGLE, payload: !context_toggle })
	};

	const filtered_values = ["_id", "id", "index", "url"];

	
	// Bind useDispatch function to a variable
	const dispatch = useDispatch();
	
	const BootstrapDialogTitle = (props) => {
		const { children, onClose, ...other } = props;
	
		return (
			<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
				{children}
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
		);
	};

	return (
		<BootstrapDialog
			onClose={toggle_context_menu}
			aria-labelledby="customized-dialog-title"
			open={context_toggle}
		>
			<BootstrapDialogTitle id="customized-dialog-title" onClose={toggle_context_menu}>
				{
					highlighted_spell.name
				}
			</BootstrapDialogTitle>
			
			<DialogContent dividers>
				{
					//TODO: filter out unnecessary keys.
					Object.keys(highlighted_spell).filter((item)=>item !== !filtered_values.includes(item)).map((item) => {
						return (
							<Fragment
								key={item}
							>
								<Typography
									gutterBottom
								>
									<Box
										sx={{fontWeight: "bold", textTransform: 'capitalize'}}
									>
										{item}

									</Box>
									<Box
									>
										{highlighted_spell[item].toString()}
									</Box>
								</Typography>


							</Fragment>

						);
					})
				}
			</DialogContent>

			<DialogActions>
				<Button autoFocus onClick={toggle_context_menu}>
					Close
				</Button>
			</DialogActions>
		
		</BootstrapDialog>
	);
}

export default CustomizedDialogs