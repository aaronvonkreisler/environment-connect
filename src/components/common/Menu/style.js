import styled, { css } from 'styled-components';

export const StyledMenu = styled.ul`
   z-index: 1000;
   min-width: 10rem;
   padding: 0.5rem 0;
   font-size: 1rem;
   color: ${({ theme }) => theme.colors.textPrimary};
   background-color: ${({ theme }) => theme.colors.containerGrey};
   text-align: left;
   list-style: none;
   background-clip: padding-box;
   border: 1px solid rgba(0, 0, 0, 0.15);
   border-radius: 0.25rem;
   position: absolute;
   opacity: 0;
   transition: opacity 288ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 192ms cubic-bezier(0.4, 0, 0.2, 1) 96ms;
   ${(props) =>
      props.$open &&
      css`
         opacity: 1;
      `};
`;

export const StyledMenuItem = styled.li`
   display: block;
   width: 100%;
   padding: 0.25rem 1rem;
   clear: both;
   font-weight: 400;
   color: inherit;
   text-align: inherit;
   text-decoration: none;
   white-space: nowrap;
   background-color: transparent;
   border: 0;
   cursor: pointer;
   transition: background-color 0.2s ease-in-out;
   &:hover {
      background-color: ${({ theme }) => theme.effects.buttonHover};
   }
`;
