import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
   cursor: pointer;
   display: inline-flex;
   outline: 0;
   align-items: center;
   vertical-align: middle;
   justify-content: center;
   text-decoration: none;
   background-color: transparent;
   flex: 0 0 auto;
   color: ${(props) => props.theme.colors.textPrimary};
   padding: 12px;
   font-size: 1.5rem;
   text-align: center;
   transition: background-color 0.2s ease-in-out;
   border-radius: 50%;
   height: 48px;
   width: 48px;
   &:hover {
      background-color: ${({ theme }) => theme.effects.buttonHover};
   }
   ${(props) =>
      props.$small &&
      `
   height: 32px;
   width: 32px;
   font-size: .95rem;
   padding: 0;
   
   `}
   ${(props) =>
      props.$danger &&
      css`
         &:hover {
            color: rgb(224, 36, 94);
            background-color: rgba(224, 36, 94, 0.2);
            transition: background-color 0.2s ease-in;
         }
      `}

   ${(props) =>
      props.$grey &&
      css`
         color: rgb(136, 153, 166) !important;
      `}
`;

function IconButton({ small, danger, grey, ...props }) {
   return (
      <StyledButton $small={small} $danger={danger} $grey={grey} {...props} />
   );
}

export default IconButton;
