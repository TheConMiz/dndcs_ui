import React from 'react'
import { useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import Flex_Card from './base/Flex_Card';

const ListPane = () => {
    // State components
    // Obtain list of spells from redux state.
    const spell_list = useSelector(state => state.data.spells);
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
                loading={spell_list.length <= 0 ? true: false}
            />
        </Flex_Card>
    )
}

export default ListPane