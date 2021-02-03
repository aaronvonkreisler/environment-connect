import styled from 'styled-components';

export const TableContainer = styled.div`
   width: 100%;
   overflow-x: auto;
   box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
   background-color: ${({ theme }) => theme.colors.containerGrey};
   border-radius: 12px;
`;

export const TableHeading = styled.th`
   color: ${({ theme }) => theme.colors.textPrimary};
   font-weight: 500;
   line-height: 1.5rem;
   display: table-cell;
   padding: 16px;
   font-size: 0.875rem;
   border-bottom: 1px solid rgba(81, 81, 81, 1);
   vertical-align: inherit;
   text-align: right;
`;

export const TableRow = styled.tr`
   outline: 0;
   vertical-align: middle;
   color: inherit;
   display: table-row;
`;

export const TableCell = styled.td`
   display: table-cell;
   padding: 16px;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: 1.44;
   border-bottom: 1px solid rgba(81, 81, 81, 1);
   vertical-align: inherit;
   text-align: right;
   color: ${({ theme }) => theme.colors.textPrimary};
`;
