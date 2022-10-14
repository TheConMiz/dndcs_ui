import { Button } from '@mui/material'
import React from 'react'
import Flex_Card from './base/Flex_Card'

const ControlPane = () => {
    return (
        <Flex_Card
            width="40"
            height="20"
        >
            <Button>Disable Sidebar</Button>
        </Flex_Card>
    )
}

export default ControlPane