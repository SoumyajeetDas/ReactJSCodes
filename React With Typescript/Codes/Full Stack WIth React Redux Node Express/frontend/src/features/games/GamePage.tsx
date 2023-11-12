import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../store/store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const GamePage: React.FC = () => {
    const { games, loading } = useAppSelector(state => state.gamesReducer);

    const navigate = useNavigate();

    return (
        <Container fixed sx={{
            mt: 10
        }}>
            <Stack>
                <Button variant="contained" sx={{
                    marginLeft: "auto"
                }}
                onClick={()=>navigate("/addGame")}
                >Create</Button>
            </Stack>
            <Stack>

                {loading ? <h3>Loading....</h3> :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Number of People&nbsp;(g)</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                    <TableCell align="right">Field Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {games && games.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right">{row.numberOfPeople}</TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                        <TableCell align="right">{row.fieldNumber}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </Stack>

        </Container>
    )
}

export default GamePage
