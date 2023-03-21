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
				display: "flex",
				maxWidth: "95vw",
				width: props.width.toString() + "vw",
				height: props.height.toString() + "vh",
				overflow: "",
				flexShrink: 1,
				whiteSpace: 'nowrap',
				boxSizing: 'border-box',
				alignItems: props.alignItems,
				flexDirection: props.flexDirection,
				justifyContent: props.justifyContent
			}}
		>
			{props.children}
		</Paper>
	)
}

export default Flex_Card