import React, { Fragment, useEffect } from 'react'
import { Grid } from '@mui/material'
import ListPane from '../ListPane'
import ContextWindow from "./../ContextWindow"

const Spell_Table = () => {

	return (
		<Fragment>
			<Grid
				item
			>
				<ListPane />

			</Grid>

			<ContextWindow />
		</Fragment>

			
	)
}

export default Spell_Table