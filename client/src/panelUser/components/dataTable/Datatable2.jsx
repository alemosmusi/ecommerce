import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import Link from '@mui/material/Link';
import TableCell from '@mui/material/TableCell'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './data.css'





function CollapsibleTable({reviews}) {

  const rows = [];

  for (let i = 0; i < reviews.length; ++i) {
  
    rows.push({
      id: reviews[i].id,
      img: reviews[i].product.img,
      name: reviews[i].product.nickname,
      rating: reviews[i].rating,
      reviews:reviews[i].comment
    })
  }

  const columns = [
    { field: 'id', width: 80 },
    { field: 'img', 
     renderCell: (params) => <Img {...params} />
    },
    { field: 'name', },
    { field: 'rating',
     type: 'number',
     width: 140,
     renderCell: (params) => <HalfRating {...params} /> , 
    },
    {
      field: 'reviews',
      width: 550,
      renderCell: (params) => <ExpandableCell {...params} />,
    },
  ];

  const Img = ({value}) => {
    return (
      <TableCell component="th" scope="row">
        <img className="cellImg" src={value} alt="img" />
      </TableCell>
    );
  }
  
  const HalfRating = ({value}) => {
    return (
      <Stack spacing={1}>
        <Rating name="half-rating-read" defaultValue={value} precision={1} readOnly />
      </Stack>
    );
  }
  
  const ExpandableCell = ({ value }) => {
    const [expanded, setExpanded] = React.useState(false);
  
    return (
      <Box>
        {expanded ? value : value.slice(0, 176)}&nbsp;
        {value.length > 176 && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            type="button"
            component="button"
            sx={{ fontSize: 'inherit' }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'view less' : 'view more'}
          </Link>
        )}
      </Box>
    );
  };
  
  
  
 

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      { rows ? (
      <DataGrid
        rows={rows}
        columns={columns}
        getRowHeight={() => 'auto'}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 1,
          },
        }}
      /> ) : (<div> No hay reviews</div>)
      }
    </Box>
  );

}

export default CollapsibleTable

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// // import {
// //   randomInt,
// //   randomUserName,
// //   randomArrayItem,
// // } from '@mui/x-data-grid-generator';

// // const lines = [
// //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
// //   'Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum.',
// //   'Maecenas non felis venenatis, porta velit quis, consectetur elit.',
// //   'Vestibulum commodo et odio a laoreet.',
// //   'Nullam cursus tincidunt auctor.',
// //   'Sed feugiat venenatis nulla, sit amet dictum nulla convallis sit amet.',
// //   'Nulla venenatis justo non felis vulputate, eu mollis metus ornare.',
// //   'Nam ullamcorper ligula id consectetur auctor.',
// //   'Phasellus et ultrices dui.',
// //   'Fusce facilisis egestas massa, et eleifend magna imperdiet et.',
// //   'Pellentesque ac metus velit.',
// //   'Vestibulum in massa nibh.',
// //   'Vestibulum pulvinar aliquam turpis, ac faucibus risus varius a.',
// // ];

// const ExpandableCell = ({ value }) => {
//   const [expanded, setExpanded] = React.useState(false);

//   return (
//     <Box>
//       {expanded ? value : value.slice(0, 176)}&nbsp;
//       {value.length > 176 && (
//         // eslint-disable-next-line jsx-a11y/anchor-is-valid
//         <Link
//           type="button"
//           component="button"
//           sx={{ fontSize: 'inherit' }}
//           onClick={() => setExpanded(!expanded)}
//         >
//           {expanded ? 'view less' : 'view more'}
//         </Link>
//       )}
//     </Box>
//   );
// };

// ExpandableCell.propTypes = {
//   /**
//    * The cell value, but if the column has valueGetter, use getValue.
//    */
//   value: PropTypes.any,
// };

// const columns = [
//   { field: 'id' },
//   { field: 'img' },
//   { field: 'name' },
//   { field: 'rating', type: 'number' },
//   {
//     field: 'reviews',
//     width: 400,
//     renderCell: (params) => <ExpandableCell {...params} />,
//   },
// ];

// const rows = [
//   { id: 1, img: "img" , name: "name", rating: 3, reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//   { id: 2, img: "img" , name: "name",  rating: 4, reviews: "Vestibulum in massa nibh. Nulla venenatis justo non felis vulputate, eu mollis metus ornare. Vestibulum in massa nibh" }
// ];

// // for (let i = 0; i < 10; i += 1) {
// //   const bio = [];

// //   for (let j = 0; j < randomInt(3, 8); j += 1) {
// //     bio.push(randomArrayItem(lines));
// //   }

// //   rows.push({
// //     id: i,
// //     username: randomUserName(),
// //     age: randomInt(10, 80),
// //     bio: bio.join(' '),
// //   });
// // }

// function CollapsibleTable() {
//   return (
//     <div style={{ height: 400, width: 800 }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         getEstimatedRowHeight={() => 100}
//         getRowHeight={() => 'auto'}
//         components={{ Toolbar: GridToolbar }}
//         sx={{
//           '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
//             py: 1,
//           },
//           '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
//             py: '15px',
//           },
//           '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
//             py: '22px',
//           },
//         }}
//       />
//     </div>
//   );
// }

// export default CollapsibleTable
