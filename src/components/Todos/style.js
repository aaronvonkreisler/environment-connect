import styled from 'styled-components';

export const TodoCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.paper};
   box-shadow: ${({ theme }) => theme.elevation.two};
   border-radius: 4px;
   margin-left: 16px;
   height: 490px;
   /* max-height: 510px; */
   overflow-y: auto;
   margin-bottom: 24px;
   width: 100%;
   padding: 8px 16px;
   &::-webkit-scrollbar {
      display: none;
   }
   -ms-overflow-style: none; /* IE and Edge */
   scrollbar-width: none;
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
   position: sticky;

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
   width: 100%;
   padding: 8px;
   cursor: pointer;
   border-radius: 4px;

   &:hover {
      background-color: hsla(0, 0%, 100%, 0.075);
   }
`;

export const ErrorMessage = styled.p`
   color: ${({ theme }) => theme.colors.textError};
`;

export const ColorCircle = styled.span`
   height: 12px;
   width: 12px;
   background-color: ${(props) => props.$color};
   border: 1px solid ${(props) => props.$color};
   border-radius: 50%;
`;
