import styled from 'styled-components';

export const NotesContainer = styled.div`
   display: flex;
   margin-top: 20px;
`;

export const NotesBody = styled.section`
   display: flex;
   flex-direction: column;
   flex: 1 100%;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.paper};
   border-radius: 4px;
   min-height: 300px;
   box-shadow: ${({ theme }) => theme.elevation.three};
   white-space: pre-wrap;
`;
