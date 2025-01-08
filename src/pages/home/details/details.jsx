import React, { useEffect, useState } from 'react'
import app from '../../../firebase';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import './details.css'


export const Details = () => {
    const db = getFirestore()
    //----------------------------------------------------
    const [data, setdata] = useState([])

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'formdata'));
            const dataDetails = querySnapshot.docs.map((item) => item.data())
            console.log('Data :', dataDetails)
            setdata(dataDetails)

        } catch (e) {
            console.log('try catch error', e)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(data)
    return (
       
        <div>
            <table>
                <thead className='t_head'>
                    <tr className='t_head_row'>
                        <th>Stock Name</th>
                        <th>Trade Date</th>
                        <th>Sett Date</th>
                        <th>Buy QTY</th>
                        <th>Buy Rate</th>
                        <th>Sell QTY</th>
                        <th>Sell Rate</th>
                        <th>Buy Amount</th>
                        <th>Sell Amount</th>
                        <th>Broker Amount</th>
                        <th>FED Amount</th>
                        <th>Net Amount</th>
                    </tr>
                </thead>
                <tbody className='t_body'>
                    {data.map((item, index) => (
                        <tr key={index} className='t_body_row'>
                            <td>{item.stockName}</td>
                            <td>{item.sett_date?.seconds ? new Date(item.sett_date.seconds * 1000).toLocaleString() : 'N/A'}</td> {/* Optional chaining with fallback */}
                            <td>{item.trade_date?.seconds ? new Date(item.trade_date.seconds * 1000).toLocaleString() : 'N/A'}</td> {/* Optional chaining with fallback */}
                            <td>{item.buy_QTY}</td>
                            <td>{item.buy_rate}</td>
                            <td>{item.sell_QTY}</td>
                            <td>{item.sell_rate}</td>
                            <td>{item.buy_amount}</td>
                            <td>{item.sell_amount}</td>
                            <td>{item.broker_amount}</td>
                            <td>{item.fed_amount}</td>
                            <td>{item.net_amount}</td>



                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export const Details = () => {
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//                         <StyledTableCell align="right">Calories</StyledTableCell>
//                         <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//                         <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//                         <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">
//                                 {row.name}
//                             </StyledTableCell>
//                             <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                             <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                             <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                             <StyledTableCell align="right">{row.protein}</StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }
