import styled, { css } from 'styled-components';

export const StyledUl = styled.ul`
   position: absolute;
   top: 100%;
   z-index: 1000;
   display: none;
   min-width: 8rem;

   padding: 0.5rem 0;
   font-size: 1rem;
   list-style: none;
   text-align: left;
   background-color: #343a40;
   background-clip: padding-box;
   border: 1px solid rgba(0, 0, 0, 0.15);
   border-radius: 0.25rem;
   ${(props) =>
      props.$open &&
      css`
         margin: ${(props) => props.$margin || 0};
         position: absolute;
         inset: 0px auto auto 0px;
         transform: translate(0px, 20px);
         display: block;
      `}
`;

export const PillButton = styled.button`
   padding: 0.2em 0.55em;
   margin: ${(props) => props.$margin || 0};
   font-size: 0.65em;
   font-weight: 500;
   /* background-color: #6c757d; */
   background-color: #38484e;
   border-radius: 4px;
   /* color: #212529; */
   color: ${({ theme }) => theme.colors.textPrimary};
   min-width: 6rem;
   cursor: pointer;

   &:hover {
      background-color: #535c64;
      transition: background-color 0.2s ease-in;
   }
   // caret arrow
   &::after {
      display: inline-block;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: '';
      border-top: 0.4em solid;
      border-right: 0.4em solid transparent;
      border-bottom: 0;
      border-left: 0.4em solid transparent;
   }
`;

export const StyledLi = styled.li`
   padding: 0.2em 0.55em;
   cursor: pointer;
   &:hover {
      background-color: hsla(210, 10%, 42%, 0.76);
      transition: background-color 0.2s ease-in;
   }
`;
