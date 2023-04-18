import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import Flex_Card from './base/Flex_Card';
import { UPDATE_HIGHLIGHTED_SPELL, UPDATE_CONTEXT_TOGGLE } from './../../actions/app_actions';

const ListPane = () => {
    // Obtain list of spells from redux state.
    const spell_list = useSelector(state => state.data.spells);
    // const spell_list = [];

    const context_toggle = useSelector(state => state.app.settings.context_toggle);

    // Define the columns to be displayed by the spell table 
    const columns = [
        { field: 'prepared', headerName: 'Prepared', width: 70 },
        { field: 'name', headerName: 'Name', width: "200", sortable: true },
        { field: 'desc', headerName: 'Description', width: "600" },
        // { field: '', headerName: 'Save', width: "200" },
        { field: "school", headerName: 'School', width: "200" },
        { field: 'casting_time', headerName: 'Time', width: "120" },
        { field: 'range', headerName: 'Range', width: "75" },
        { field: 'components', headerName: 'Comp.', width: "75" },
    ];
    // Bind useDispatch function to a variable
    const dispatch = useDispatch();

    const get_spell_context = (highlighted_spell) => {
        let new_context = spell_list.find((spell) => spell.index === highlighted_spell);
        return new_context;
	}

    return (
        <Flex_Card
            width="90"
            height="80"
            
        >

            <DataGrid
                rows={spell_list}
                // onRowClick={(event) => {
                //     console.log(event.value)
                // }}
                getRowId={(row) => row.index}
                rowHeight={40}
                columns={columns}
                pageSize={15}
                density='standard'
                loading={spell_list.length <= 0 ? true : false}
                onRowClick={(event) => {
                    // Do this to display the spell information in a pop-up window.
                    let highlighted_spell = get_spell_context(event.row.index);
                    dispatch({ type: UPDATE_HIGHLIGHTED_SPELL, payload: highlighted_spell })
                    dispatch({ type: UPDATE_CONTEXT_TOGGLE, payload: !context_toggle })
                }}
            />
        </Flex_Card>
    )
}

export default ListPane