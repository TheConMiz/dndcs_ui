import React from 'react'
import { Grid } from '@mui/material'
import Flex_Card from '../base/Flex_Card'
import { Fragment } from 'react'

const Overview_Dashboard = () => {
	return (
		<Fragment>
			<Grid
				item
			>
				<Flex_Card
					width={30}
					height={30}
				/>
				<Flex_Card
					width={30}
					height={30}
				/>

				<Flex_Card
					width={30}
					height={30}
				/>
			</Grid>
		</Fragment>
	)
}

export default Overview_Dashboard