import styled from 'styled-components';

export const NotesContainer = styled.div`
   grid-area: notes;
`;

export const NotesBody = styled.section`
   display: flex;
   flex: 1 100%;
   width: 100%;
   padding: 16px;
   background-color: ${({ theme }) => theme.colors.paper};
   border-radius: 4px;
   min-height: 300px;
   box-shadow: ${({ theme }) => theme.elevation.two};
`;

export const NotesTitle = styled.div`
   font-family: 'Rubik', sans-serif;
   font-size: 22px;
   font-weight: 400;
   text-align: left;
`;
