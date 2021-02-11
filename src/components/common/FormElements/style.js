import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
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

export const StyledErrorMessage = styled.p`
   color: ${({ theme }) => theme.colors.textError};
`;

export const StyledLabel = styled.label`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-top: 12px;
   font-weight: 500;
   font-size: 16px;
   letter-spacing: -0.4px;
   position: relative;
   color: ${({ theme }) => theme.colors.textGrey};

   ${(props) =>
      props.$border &&
      css`
         border-bottom: 3px solid rgb(136, 153, 166);
         &:focus-within {
            border-color: rgb(29, 161, 242);
            color: rgb(29, 161, 242);
         }
      `}
   ${(props) =>
      props.$borderSmall &&
      css`
         border-bottom: 1px solid rgb(136, 153, 166);
         &:focus-within {
            border-color: rgb(29, 161, 242);
            color: rgb(29, 161, 242);
         }
      `}

   ${(props) =>
      props.$spacing &&
      css`
         margin: 0 10px;
      `}
`;

export const StyledLableInput = styled.input`
   flex: 1 0 auto;
   background: transparent;
   font-weight: 500;
   width: 100%;
   font-size: 18px;
   border-radius: 4px;
   padding: 8px 12px 8px 2px;
   margin-top: 2px;
   box-shadow: none;
   color: ${({ theme }) => theme.colors.textPrimary};
   &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
   }
   &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
   }
   &:-moz-placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
   }
   &:-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`;

export const StyledLabelSelect = styled.select`
   flex: 1 0 auto;
   background: ${({ theme }) => theme.colors.paper};
   color: ${({ theme }) => theme.colors.textPrimary};
   font-weight: 500;
   width: 100%;
   font-size: 18px;
   border-radius: 4px;
   padding: 8px 12px 8px 2px;
   margin-top: 2px;
   box-shadow: none;
`;
