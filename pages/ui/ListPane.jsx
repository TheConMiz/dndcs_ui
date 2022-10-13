import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import Flex_Card from './base/Flex_Card';
import ContextWindow from "./unused/ContextWindow"
import { Button } from '@mui/material';
import { UPDATE_HIGHLIGHTED_SPELL, UPDATE_CONTEXT_TOGGLE } from './../../actions/app_actions';



const ListPane = () => {
    const [toggle, setToggle] = useState(false);
    // Obtain list of spells from redux state.
    const spell_list = useSelector(state => state.data.spells);
    const context_toggle = useSelector(state => state.app.settings.context_toggle);

    // Define the columns to be displayed by the spell table 
    const columns = [
        // { field: 'prepared', headerName: 'Prepared', width: 70 },
        { field: 'name', headerName: 'Name', width: "200", sortable: true },
        { field: 'desc', headerName: 'Description', width: "600" },
        // { field: '', headerName: 'Save', width: "200" },
        // { field: '', headerName: 'School', width: "200" },
        { field: 'casting_time', headerName: 'Time', width: "75" },
        { field: 'range', headerName: 'Range', width: "75" },
        { field: 'components', headerName: 'Comp.', width: "75" },
    ];
    // Bind useDispatch function to a variable
    const dispatch = useDispatch();

    return (
        <Flex_Card
            width="80"
            height="50"
        >
            <DataGrid
                rows={spell_list}
                rowHeight={40}
                columns={columns}
                pageSize={15}
                density='standard'
                loading={spell_list.length <= 0 ? true : false}
                onRowClick={(event) => {
                    // Do this to display the spell information in a pop-up window.
                    dispatch({ type: UPDATE_HIGHLIGHTED_SPELL, payload: event.row.index })
                    dispatch({ type: UPDATE_CONTEXT_TOGGLE, payload: !context_toggle })
                }}
            />
            {/* <ContextWindow/> */}
        </Flex_Card>
    )
}

export default ListPane