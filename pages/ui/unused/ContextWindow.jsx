import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Tags from './Tags'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

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

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {

	const handleToggle = () => {
		props.toggle(!props.toggleValue)
	};

	const highlighted_spell = useSelector(state => state.app.highlighted_spell);
	const spell_list = useSelector(state => state.data.spells);
	const [context, setContext] = useState(highlighted_spell);
	
	const get_spell_context = () => {
		let new_context = spell_list.find((spell) => spell.index === highlighted_spell);
		console.log(new_context)
		setContext(new_context);
	}

    useEffect(() => {
        get_spell_context();
    }, [context]);

	return (
		<div>
			<BootstrapDialog
				// onClose={handleToggle}
				aria-labelledby="customized-dialog-title"
				// open={props.toggle}
			>
				{
					highlighted_spell &&
					<Fragment>
						{/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleToggle}>
							{context.name}
							<Tags />
						</BootstrapDialogTitle>
						<Typography>
							{"Casting Time: " + context.casting_time}
						</Typography>
						<Typography>
							{"Components: " + context.components.join(", ")}
						</Typography>
						<Typography>
							{"Concentration: " + context.concentration}
						</Typography>
						<Typography>
							{"Duration: " + context.duration}
						</Typography>
						<Typography>
							{"Ritual: " + context.ritual}
						</Typography> */}
							{context}
					</Fragment>

				}

				<DialogContent dividers>
					{
						// context && <Typography gutterBottom>{context.desc.join(" ")}</Typography>
					}
				</DialogContent>

				<DialogActions>

				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
