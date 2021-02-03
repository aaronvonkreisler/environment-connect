import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { TableContainer, TableCell, TableRow, TableHeading } from './style';

function PlantTable() {
   const data = useMemo(
      () => [
         {
            col1: 'Hello',
            col2: 'World',
         },
         {
            col1: 'react-table',
            col2: 'rocks',
         },
         {
            col1: 'whatever',
            col2: 'you want',
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
         {
            Header: 'Plant Name',
            accessor: 'plantName', // accessor is the "key" in the data
         },
         {
            Header: 'Layer',
            accessor: 'layer',
         },
         {
            Header: 'Zone Count',
            accessor: 'zone',
         },
      ],

      []
   );

   // const {
   //    getTableProps,
   //    getTableBodyProps,
   //    headerGroups,
   //    rows,
   //    prepareRow,
   // } = useTable({ columns, data });

   return (
      <p>Table</p>
      // <TableContainer>
      //    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      //       <thead>
      //          {headerGroups.map((headerGroup) => (
      //             <TableRow {...headerGroup.getHeaderGroupProps()}>
      //                {headerGroup.headers.map((column) => (
      //                   <TableHeading {...column.getHeaderProps()}>
      //                      {column.render('Header')}
      //                   </TableHeading>
      //                ))}
      //             </TableRow>
      //          ))}
      //       </thead>
      //       <tbody {...getTableBodyProps()}>
      //          {rows.map((row) => {
      //             prepareRow(row);
      //             return (
      //                <TableRow {...row.getRowProps()}>
      //                   {row.cells.map((cell) => {
      //                      return (
      //                         <TableCell {...cell.getCellProps()}>
      //                            {cell.render('Cell')}
      //                         </TableCell>
      //                      );
      //                   })}
      //                </TableRow>
      //             );
      //          })}
      //       </tbody>
      //    </table>
      // </TableContainer>
   );
}

PlantTable.propTypes = {};

export default PlantTable;
