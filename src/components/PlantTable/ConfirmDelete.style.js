import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Icon = styled.div`
   font-size: 4rem;
   color: ${({ theme }) => theme.colors.textError};
`;

export const Message = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${({ theme }) => theme.colors.textPrimary};

   & > :nth-child(1) {
      text-align: center;
      font-weight: 700;
   }

   & > :nth-child(2) {
      text-align: center;
      color: ${({ theme }) => theme.colors.textGrey};
   }
`;

export const Actions = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin: 10px 0;
`;

export const PillButton = styled.button`
   width: 120px;
   min-height: 40px;
   min-width: 74px;
   border-radius: 9999px;
   font-size: 15px;
   font-weight: 700;
   padding-left: 1em;
   padding-right: 1em;
   color: ${({ theme }) => theme.colors.textPrimary};
   background-color: rgb(37, 51, 65);
   margin-right: ${(props) => (props.$left ? '20px' : '0')};
   cursor: pointer;
   transition: background-color 0.2s ease-in;
   &:hover {
      background-color: rgb(59, 71, 84);
   }
   ${(props) =>
      props.$danger &&
      css`
         background-color: ${({ theme }) => theme.colors.textError};

         &:hover {
            background-color: rgb(202, 32, 85);
         }
      `}
`;
