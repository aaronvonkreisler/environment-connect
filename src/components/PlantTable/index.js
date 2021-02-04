import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import {
   TableContainer,
   TableCell,
   TableRow,
   TableHeading,
   StyledTable,
   ColoredLabel,
} from './style';
import IconButton from 'components/common/IconButton';
import { getColorForLayer } from 'utils/utils';
import useSortableData from 'hooks/useSortableData';
import { FlexRow } from 'components/common/StyledUtils/style';

const headerGroups = [
   {
      label: 'Plant Name',
      identifier: 'plantName',
      align: 'left',
   },
   {
      label: 'Layer',
      identifier: 'layer',
      align: 'left',
   },
   {
      label: 'Zone Count',
      identifier: 'zone',
      align: 'left',
   },
   {
      label: 'Actions',
      identifier: 'actions',
      align: 'middle',
   },
];

function PlantTable({ data, className }) {
   const { items, requestSortBy, sortConfig } = useSortableData(data);

   const getClassNamesFor = (name) => {
      if (!sortConfig) {
         return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
   };

   return (
      <TableContainer>
         <StyledTable>
            <thead>
               <TableRow $topRow className={className}>
                  {headerGroups.map((header) => (
                     <TableHeading
                        key={header.identifier}
                        onClick={() => requestSortBy(header.identifier)}
                        className={getClassNamesFor(header.identifier)}
                        $align={header.align}
                     >
                        {header.label}
                     </TableHeading>
                  ))}
               </TableRow>
            </thead>
            <tbody>
               {items.map((item) => {
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
                        <TableCell>
                           <FlexRow justify="space-evenly">
                              <IconButton small>
                                 <FiEdit2 />
                              </IconButton>
                              <IconButton small danger>
                                 <FaTrash />
                              </IconButton>
                           </FlexRow>
                        </TableCell>
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
