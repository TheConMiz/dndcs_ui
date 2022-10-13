import { Paper } from '@mui/material'
import React from 'react'
/**
*	When inputting the dimensions, it is assumed to be a percentage value. No need to type in the unit.  
*/
const Flex_Card = (props) => {

	return (
		<Paper
			elevation={1}
			sx={{
				maxWidth: "95%",
				width: props.width.toString() + "%",
				height: props.height.toString() + "%",
				overflow: "scroll",
				flexShrink: 1,
				whiteSpace: 'nowrap',
				boxSizing: 'border-box',
			}}
		>
			{props.children}
		</Paper>
	)
}

export default Flex_Card