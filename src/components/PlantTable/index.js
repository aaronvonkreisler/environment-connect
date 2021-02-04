import React, { useMemo } from 'react';
import {
   TableContainer,
   TableCell,
   TableRow,
   TableHeading,
   StyledTable,
   ColoredLabel,
} from './style';

const headerGroups = [
   {
      label: 'Plant Name',
      identifier: 'plantName',
   },
   {
      label: 'Layer',
      identifier: 'layer',
   },
   {
      label: 'Zone Count',
      identifier: 'zone',
   },
   {
      label: 'Actions',
      identifier: 'actions',
   },
];
// const layers = [
//    {
//       label: 'Canopy',
//    },
//    {
//       label: 'Low Tree',
//    },
//    {
//       label: 'Vertical',
//    },
//    {
//       label: 'Shrub',
//    },
//    {
//       label: 'Rhizosphere',
//    },
//    {
//       label: 'Herbaveous',
//    },

//    {
//       label: 'Soil Surface',
//    },
// ];

const getColorForLayer = (layerName) => {
   const layer = layerName.toLowerCase();

   if (layer === 'canopy') {
      return 'red';
   } else if (layer === 'low tree') {
      return 'dark green';
   } else if (layer === 'vertical') {
      return 'yello';
   } else if (layer === 'shrub') {
      return 'orange';
   } else if (layer === 'rhizosphere') {
      return 'purple';
   } else if (layer === 'herbaveous') {
      return 'green';
   } else if (layer === 'soil surface') {
      return 'aliceblue';
   }
};

function PlantTable({ data }) {
   return (
      <TableContainer>
         <StyledTable>
            <thead>
               <TableRow $topRow>
                  {headerGroups.map((header) => (
                     <TableHeading key={header.identifier}>
                        {header.label}
                     </TableHeading>
                  ))}
               </TableRow>
            </thead>
            <tbody>
               {data.map((item) => {
                  const { plantName, layer, zone, id } = item;
                  const color = getColorForLayer(layer);
                  return (
                     <TableRow key={id}>
                        <TableCell>{plantName}</TableCell>
                        <TableCell>
                           <ColoredLabel $color={color} />
                           {layer}
                        </TableCell>
                        <TableCell>{zone}</TableCell>
                        <TableCell>Actions</TableCell>
                     </TableRow>
                  );
               })}
            </tbody>
         </StyledTable>
      </TableContainer>
   );
}

// <tbody {...getTableBodyProps()}>
//    {rows.map((row) => {
//       prepareRow(row);
//       return (
//          <TableRow {...row.getRowProps()}>
//             {row.cells.map((cell) => {
//                return (
//                   <TableCell {...cell.getCellProps()}>
//                      {cell.render('Cell')}
//                   </TableCell>
//                );
//             })}
//          </TableRow>
//       );
//    })}
// </tbody>

PlantTable.propTypes = {};

export default PlantTable;
