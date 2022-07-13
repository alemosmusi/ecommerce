import "./data.css";
import * as React from 'react';
// import PropTypes from 'prop-types';
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
// import { ordersColumns } from "../../listOrders/ordersColumns"
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllShoes } from "../../../redux/actions";
// // const ordersColumns

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
        id: 1,
        nickname: "Shadow",
        img: "https://image.goat.com/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        color: 'Black',
        price: 16000,
      },
      {
        id: 2,
        nickname: "Bred",
        img: "https://image.goat.com/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png",
        color: 'Black',
        price: 14000,
      },
    ],
  };
}
const rows = [
  createData('1524', 4, 19000, 24, 4.0, 3.99),
  createData('2656', 2, 20500, 37, 4.3, 4.99),
  createData('3544', 1, 7000, 24, 6.0, 3.79),
  createData('4456', 1, 8000, 67, 4.3, 2.5),
  createData('5544', 3, 19000, 49, 3.9, 1.5),
];

function Row(props) {
  const { row } = props;
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
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell> */}
        {/* <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Productos</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                      <img className="cellImg" src={historyRow.img} alt="avatar" />
                      </TableCell>
                      <TableCell>{historyRow.color}</TableCell>
                      <TableCell align="right">{historyRow.price}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.price * row.calories * 100) / 100}
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


export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Ordenes (Id)</TableCell>
            <TableCell align="right">Product (#)</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
            <TableCell align="right">Total ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export default Datatable;
// module.export ={
//     CollapsibleTable
// };