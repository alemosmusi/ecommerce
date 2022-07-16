import * as React from 'react';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';




function Order(product, details) {

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
            Num Ordenid/id
          </TableCell>
          <TableCell align="right">UnidaUnda T/amount_total</TableCell>
          <TableCell align="right">Total O/price_total</TableCell>
        </TableRow>
     
        
  
  
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History: date
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
                      <TableRow key="gf">
                        <TableCell>x.productID</TableCell>
                        <TableCell align="right">x.amount</TableCell>
                        <TableCell align="right">
                          x.priceTotal
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

  export default Order;
  