import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 50
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'desc', headerName: 'Description', width: 130 },
    { field: 'age', headerName: 'Status', type: 'number', width: 200,},
   
];



// const rows = [
//     { id: 1,  desc: 'Jon', age: 35 },
//     { id: 2,  desc: 'Cersei', age: 42 },
//     { id: 3,  desc: 'Jaime', age: 45 },
 
// ];


export default function Proposal() {

    const [rows, setRows] = useState([
        { id: 1,  desc: 'Jon', age: 'Passed' },
        { id: 2,  desc: 'Cersei', age: 'Reject' },
        { id: 3,  desc: 'Jaime', age: 'Passed' },
     
    ])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <div>
                    <h2>DAO Governance</h2>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>Proposal Created
                            <div> <span>60</span> </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Eligible Voter
                            <div> <span>60</span> </div>
                        </Item>

                    </Grid>
                    <Grid item xs={3}>
                        <Item>On Going Proposal
                            <div> <span>60</span> </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            {/* Table */}
            <div style={{ height: 260, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[0]}
                    checkboxSelection
                />
            </div>

        </div>
    );
}
