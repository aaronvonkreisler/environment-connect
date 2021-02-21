import styled from 'styled-components';

export const TableContainer = styled.div`
   width: 100%;
   overflow-x: auto;
   max-height: 400px;
   box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
   background-color: ${({ theme }) => theme.colors.paper};
   border-radius: 4px;
   &::-webkit-scrollbar {
      display: none;
   }
   -ms-overflow-style: none; /* IE and Edge */
   scrollbar-width: none;
   margin-bottom: 24px;
   @media ${({ theme }) => theme.device.desktop} {
      max-width: 50vw;
   }
`;

export const StyledTable = styled.table`
   width: 100%;
   display: table;
   border-spacing: 0;
   border-collapse: collapse;
`;

export const TableHeading = styled.th`
   color: ${({ theme }) => theme.colors.textPrimary};
   font-weight: 700;
   line-height: 1.5rem;
   display: table-cell;
   padding: 10px;
   font-size: 1rem;
   border-bottom: 2px solid rgba(81, 81, 81, 1);
   vertical-align: inherit;
   text-align: ${(props) => props.$align || 'left'};
   cursor: pointer;
   &.ascending::after {
      content: '👇';
      display: inline-block;
      margin-left: 1em;
   }
   &.descending::after {
      content: '☝️';
      display: inline-block;
      margin-left: 1em;
   }
`;

export const TableRow = styled.tr`
   outline: 0;
   vertical-align: middle;
   color: inherit;
   display: table-row;
   &:nth-of-type(odd) {
      background-color: hsla(0, 0%, 100%, 0.05);
   }
   &:hover {
      background-color: hsla(0, 0%, 100%, 0.075);
   }
   ${(props) =>
      props.$topRow && {
         'background-color': props.theme.colors.paper + ' !important',
      }}
`;

export const TableCell = styled.td`
   display: table-cell;
   padding: 10px;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: 1.44;
   border-bottom: 1px solid #373b3e;
   vertical-align: inherit;
   text-align: left;
   color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ColoredLabel = styled.span`
   display: inline-block;
   width: 12px;
   height: 12px;
   border-radius: 2px;
   margin-right: 4px;
   background-color: ${(props) => props.$color || 'grey'};
`;

export const MessageContainer = styled.div`
   min-height: 400px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;
`;

export const Message = styled.div`
   font-weight: 600;
   font-size: 3rem;
   font-family: 'Rubik', sans-serif;
   position: absolute;
   top: auto;
   bottom: auto;
   left: auto;
   right: auto;
`;
