import { Paper } from '@mui/material'
import React from 'react'

const Flex_Card = (props) => {
	return (
		<Paper
			elevation={1}
			sx={{
				maxWidth: props.maxWidth,
				width: props.width,
				height: props.height,
				overflow: "scroll",
				flexShrink: 1,
				// whiteSpace: 'nowrap',
				// boxSizing: 'border-box',
			}}
		>
			{props.children}
		</Paper>
	)
}

export default Flex_Card