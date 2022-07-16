
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Order from "./dataRow";
function Row (details) {
    return (
        <div>
            {
                <div>
                <TableBody>
                    <TableCell>e.id</TableCell>
                    <TableCell>e.price_total</TableCell>
                    <TableCell>e.amount_total</TableCell>
                    <TableCell>e.createdAt</TableCell>
                    <TableCell>e.status</TableCell>
                    <TableCell>e.details</TableCell>
                    <TableCell>e.products</TableCell>
                </TableBody> 
                
              
                  {/* <Order 
                    product={details.products}
                    details={details.details}
                  /> */}
                  </div>
            }
        </div>
    )
}



export default Row;