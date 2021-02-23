import styled from 'styled-components';

export const TableContainer = styled.div`
   width: 100%;
   overflow-x: auto;
   max-height: 400px;
   box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
   background-color: ${({ theme }) => theme.colors.paper};
   border-radius: 4px; 
   margin-bottom: 24px;
   &::-webkit-scrollbar {
    width: 8px;
    background-color: #212121
   }
   &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow:  inset 0 0 6px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
   @media ${({ theme }) => theme.device.desktop} {
      max-width: 50vw;
      max-height: 565px;
     
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
   overflow: hidden;
`;

export const Message = styled.div`
   font-weight: 600;
   font-size: 1.1rem;
   font-family: 'Rubik', sans-serif;
   color: ${({ theme }) => theme.colors.textGrey};
   position: absolute;
   bottom: 80px;
   margin: 0 20px;
   text-align: center;
   width: 100%;
`;
