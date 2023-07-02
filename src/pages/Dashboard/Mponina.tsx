import { Container, Grid } from '@mui/material'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { rows } from './Lisitra';
import Filter from './Filter';

const Mponina = () => {
    return (
        <>
            <Container maxWidth={false}>
                <Grid container spacing={0.1}>
                    <Grid item xs={12} sm={12} md={2} sx={{
                        display: 'flex',
                        height: '80vh',
                        bgcolor: 'grey.300',
                    }}>
                        <Filter />
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} p={1} sx={{
                        display: 'flex',
                        bgcolor: 'grey.300',
                    }}>
                        <BasicTable />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Mponina



function BasicTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <DataTable />
            </TableContainer>
        </>
    );
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Laharana' },
    { field: 'name', headerName: 'Anarana', minWidth: 130 },
    { field: 'lastName', headerName: 'Fanampiny', minWidth: 130  },
    {
        field: 'age',
        headerName: 'Taona',
        type: 'number',
        width: 110,
    },
    {
        field: 'CIN',
        headerName: 'CIN',
        type: 'number',
        width: 190,
    },
    {
        field: 'phone',
        headerName: 'Finday',
        type: 'string',
        minWidth: 270,
    },
];


function DataTable() {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 8, 10]}
                // checkboxSelection
            />
        </div>
    );
}