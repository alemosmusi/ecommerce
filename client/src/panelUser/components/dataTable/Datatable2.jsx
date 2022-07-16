import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersUser } from "../../../redux/actions";





 
 
  //  const numOrders = OrdersUser.slice(-1)
// admin@admin.com 
// Admin123

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

function Order( {id, price_total, amount_total, createdAt, status, details, products} ) {
  // const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Num Orden{id}
        </TableCell>
        <TableCell align="right">Unida{amount_total}Unda T</TableCell>
        <TableCell align="right">{price_total}Total O</TableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell> */}
        {/* <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History: {createdAt.slice(0, -14)}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    {/* <TableCell>Img</TableCell> */}
                    {/* <TableCell>name Prod Customer</TableCell> */}
                    <TableCell align="right">Un x Prod Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                
                  {details.map((x) => (
                    <TableRow key={id} details={details} products={products}>
                      <TableCell>{x.productID}</TableCell>
                      <TableCell align="right">{x.amount}</TableCell>
                      <TableCell align="right">
                        {x.priceTotal}
                      </TableCell>
                    </TableRow>
                  ))}
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

 function CollapsibleTable({Orders}) {
  const dispatch = useDispatch();
  // console.log(Orders)
  useEffect(() => {
    dispatch(getAllOrdersUser(1));
  }, [dispatch]);
  // const OrdersUser = useSelector((state)=> state.OrdersUser)
  // const Orders = OrdersUser.ordens
  // console.log(Orders)
  

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
          <TableBody>
            {Orders.map((e) => (
              <Order 
              id={e.id}
              price_total={e.price_total}
              amount_total={e.amount_total}
              createdAt={e.createdAt}
              status={e.status}
              details={e.details}
              products={e.products}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}


export default CollapsibleTable;