import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Row from './row';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersUser } from "../../../redux/actions";
import Order from "./dataRow"
  //  const numOrders = OrdersUser.slice(-1)
// admin@admin.com 
// Admin123
         

function CollapsibleTable() {
  const dispatch = useDispatch();
  // console.log(Orders)
  useEffect(() => {
    dispatch(getAllOrdersUser(1));
  }, [dispatch]);
  const OrdersUser = useSelector((state)=> state.OrdersUser)
  // const Orders = OrdersUser.ordens
  const details = OrdersUser.ordens
  console.log(details)
  
  

    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>1 Numero de Orden</TableCell>
              <TableCell align="right">Calories / Unidades Total </TableCell>
              <TableCell align="right">Fat / Price Total de Orden</TableCell>
              {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <Row details={details} />
        </Table>
      </TableContainer>
    );
}


export default CollapsibleTable;