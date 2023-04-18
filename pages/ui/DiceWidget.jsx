import { Button, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import Flex_Card from './base/Flex_Card'

const DiceWidget = () => {

	const [dieRoll, setDieRoll] = useState(0)

	const randomiseRoll = () => {
		let roll = Math.floor(Math.random() * 20) + 1;
		setDieRoll(roll);
	}

	return (
		<Fragment>
			<Flex_Card
				width={15}
				height={15}
				flexDirection="column"
				alignItems="stretch"
				justifyContent="center"
			>

				<Button
					onClick={randomiseRoll}
				>
					Roll
				</Button>
				<Typography>
					{
						dieRoll === 0 ? "" : dieRoll
					}
				</Typography>
			</Flex_Card>
		</Fragment>
	)
}

export default DiceWidget