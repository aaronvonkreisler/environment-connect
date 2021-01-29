import React from 'react';
import styled from 'styled-components';

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
   /* color: ${({ theme }) => theme.colors.textPrimary}; */
   color: rgb(29, 161, 242);
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
`;

function IconButton({ ...props }) {
   return <StyledButton {...props} />;
}

export default IconButton;
