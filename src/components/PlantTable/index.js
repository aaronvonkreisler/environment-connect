import React, { useMemo, useContext } from 'react';
import { useTable } from 'react-table';

import PropTypes from 'prop-types';
import { TableContainer } from './style';
import { PlantContext } from 'providers/PlantProvider';

function PlantTable(props) {
   const plants = useContext(PlantContext);

   console.log(plants);
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
            accessor: 'col1', // accessor is the "key" in the data
         },
         {
            Header: 'Layer',
            accessor: 'col2',
         },
         {
            Header: 'Zone Count',
            accessor: 'col3',
         },
         {
            Header: 'Actions',
            accessor: 'col4',
         },
      ],

      []
   );

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
   } = useTable({ columns, data });

   return (
      <TableContainer>
         <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                           {column.render('Header')}
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {rows.map((row) => {
                  prepareRow(row);
                  return (
                     <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                           return (
                              <td {...cell.getCellProps()}>
                                 {cell.render('Cell')}
                              </td>
                           );
                        })}
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </TableContainer>
   );
}

PlantTable.propTypes = {};

export default PlantTable;
