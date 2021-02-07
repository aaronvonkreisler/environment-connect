import React from 'react';
import { useHistory } from 'react-router-dom';
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
import { FlexRow } from 'components/common/StyledUtils';

import useSortableData from 'hooks/useSortableData';

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
function Table({ className, data, removePlant }) {
   const { items, requestSortBy, sortConfig } = useSortableData(data);
   let history = useHistory();

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
                              <IconButton
                                 small
                                 grey
                                 onClick={() => history.push(`/plants/${id}`)}
                              >
                                 <FiEdit2 />
                              </IconButton>
                              <IconButton
                                 small
                                 danger
                                 grey
                                 onClick={() => removePlant(id)}
                              >
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

export default Table;
