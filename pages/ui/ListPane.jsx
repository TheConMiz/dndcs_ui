import React, { Fragment, useRef} from 'react'
import { useSelector, useDispatch,  } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Skeleton,
    IconButton,
    Checkbox
} from '@mui/material'
import { useState, useEffect } from 'react'
import Flex_Card from './base/Flex_Card';


const ListPane = () => {
    // State components
    // Obtain list of spells from redux state.
    const spell_list = useSelector(state => state.data.spells);
    const columns = [
        // { field: 'prepared', headerName: 'Prepared', width: 70 },
        { field: 'name', headerName: 'Name', width: "200", sortable: true },
        { field: 'url', headerName: 'Details', width: "200" },
    ];

    return (
        <Flex_Card>
            <DataGrid
                rows={spell_list}
                rowHeight={40}
                columns={columns}
                pageSize={15}
                // autoPageSize
                density='standard'
                // rowsPerPageOptions={[5]}
                // checkboxSelection
                loading={spell_list.length <= 0 ? true: false}
            />
        </Flex_Card>
    )
}

export default ListPane