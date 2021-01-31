import styled from 'styled-components';

export const StyledInput = styled.input`
   flex: 1 0 auto;
   background: hsl(0, 0%, 10%);
   font-weight: 500;
   width: 100%;
   font-size: 16px;
   color: ${({ theme }) => theme.colors.textSecondary};
   border-radius: 4px;
   padding: 8px 12px;
   margin-top: 10px;
   box-shadow: none;
   border: 1px solid #121212;
   &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
   }
`;

export const StyledSelect = styled.select`
   flex: 1 0 auto;
   background: hsl(0, 0%, 10%);
   font-weight: 500;
   width: 100%;
   font-size: 16px;
   color: ${({ theme }) => theme.colors.textSecondary};
   border-radius: 4px;
   padding: 8px 12px;
   margin-top: 10px;
   box-shadow: none;
   border: 1px solid #121212;
   cursor: pointer;

   &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
   }
`;
