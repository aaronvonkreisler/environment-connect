import React from 'react';
import {
   TableContainer,
   StyledTable,
   TableHeading,
   TableRow,
   TableCell,
} from './style';
import SkeletonPulse from 'components/common/SkeletonPulse';

function TableSkeleton() {
   let bodyRows = new Array(5).fill(undefined).map((val, idx) => idx);
   let headerRows = new Array(4).fill(undefined).map((val, idx) => idx);

   return (
      <TableContainer>
         <StyledTable>
            <thead>
               <TableRow>
                  {headerRows.map((row, index) => (
                     <TableHeading key={index}>
                        <SkeletonPulse height="35px" />
                     </TableHeading>
                  ))}
               </TableRow>
            </thead>
            <tbody>
               {bodyRows.map((row, index) => (
                  <TableRow key={index}>
                     <TableCell>
                        <SkeletonPulse />
                     </TableCell>
                     <TableCell>
                        <SkeletonPulse />
                     </TableCell>
                     <TableCell>
                        <SkeletonPulse />
                     </TableCell>
                     <TableCell>
                        <SkeletonPulse />
                     </TableCell>
                  </TableRow>
               ))}
            </tbody>
         </StyledTable>
      </TableContainer>
   );
}

export default TableSkeleton;
