import styled from 'styled-components';

export const TodoCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.paper};
   box-shadow: ${({ theme }) => theme.elevation.two};
   border-radius: 4px;
   margin-left: 16px;
   min-height: 400px;
   width: 100%;
   padding: 8px 16px;
   @media ${({ theme }) => theme.device.tabletAndDown} {
      margin-left: 0;
      margin-bottom: 24px;
   }
`;

export const TodoTitle = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   width: 100%;

   & > :nth-child(1) {
      flex-grow: 1;
   }
   & > :nth-child(2) {
      flex-grow: 0;
   }
`;

export const StyledTodo = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
`;
