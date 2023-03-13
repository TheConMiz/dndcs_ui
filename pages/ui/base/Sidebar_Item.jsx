import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText, Tooltip, Typography } from '@mui/material';


const Sidebar_Item = (props) => {
	return (
		<ListItem disablePadding sx={{ display: 'block' }}>
			<Tooltip
				title={props.data.tooltip}
				placement="right"
			>
				<ListItemButton
					sx={{
						minHeight: 48,
						justifyContent: props.expand ? 'initial' : 'center',
						px: 2.5,
					}}
					onClick={props.data.onClick}
				>
					<ListItemIcon
						sx={{
							minWidth: 0,
							mr: 'auto',
							justifyContent: 'center',
						}}
					>
						{props.data.icon}

					</ListItemIcon>

					{/* <ListItemText
						primary={props.data.name}
					/> */}
				</ListItemButton>
			</Tooltip>
		</ListItem>
	)
}

export default Sidebar_Item