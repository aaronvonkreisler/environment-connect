import styled, { css } from 'styled-components';

export const TodoCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.paper};
   box-shadow: ${({ theme }) => theme.elevation.two};
   border-radius: 4px;
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

   @media ${({ theme }) => theme.device.desktop} {
      max-width: 30vw;
   }
`;

export const TodoTitle = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   width: 100%;
   position: sticky;
   font-size: 16px;
   font-weight: 700;
   border-bottom: 1px solid gray;
   padding: 4px 0;

   & > :nth-child(1) {
      flex-grow: 1;
   }
   & > :nth-child(2) {
      flex-grow: 0;
      position: relative;
   }
`;

export const StyledTodo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   width: 100%;
   padding: 8px;
   margin-top: 5px;
   cursor: pointer;
   border-radius: 4px;

   &:hover {
      background-color: hsla(0, 0%, 100%, 0.075);
   }

   ${(props) =>
      props.$open &&
      css`
         background-color: hsla(0, 0%, 100%, 0.075);
      `}
`;

export const TodoText = styled.span`
   color: ${({ theme }) => theme.colors.textPrimary};
   font-size: 16px;

   ${(props) =>
      props.$completed &&
      css`
         color: ${({ theme }) => theme.colors.textGrey} !important;
      `}
`;

export const ErrorMessage = styled.p`
   color: ${({ theme }) => theme.colors.textError};
`;

export const ColorCircle = styled.span`
   height: 10px;
   width: 10px;
   margin-left: 6px;
   display: inline-block;
   background-color: ${(props) => props.$color};
   border: 1px solid ${(props) => props.$color};
   border-radius: 50%;
`;
