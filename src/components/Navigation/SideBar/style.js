import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSidebar = styled.aside`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding-top: 70px;
   background: ${({ theme }) => theme.colors.primary};
   border-right: ${({ theme }) => theme.colors.border};
   height: 100vh;
   text-align: left;
   position: absolute;
   width: ${(props) => (props.$isOpen ? '200px' : '75px')};
   top: 0;
   left: 0;
   z-index: 100;
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   transition: all 0.1s ease 0s;
   transform: translateZ(0px);

   @media ${({ theme }) => theme.device.mobile} {
      visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
      width: ${(props) => props.$isOpen && '100vw'};
   }
`;
const activeClassName = 'nav-item-active';
export const NavItem = styled(NavLink).attrs({ activeClassName })`
   position: relative;
   width: 100%;
   height: 42px;
   line-height: 42px;
   padding-left: 64px;
   color: ${({ theme }) => theme.colors.textGrey};
   transition: background-color 0.2s ease-in-out;
   &:hover {
      background-color: ${({ theme }) => theme.effects.buttonHover};
      color: ${({ theme }) => theme.colors.blue};
      & > svg {
         color: ${({ theme }) => theme.colors.blue};
      }
   }
   &.${activeClassName} {
      background-color: rgba(255, 255, 255, 0.05);
      color: ${({ theme }) => theme.colors.blue};
      & > svg {
         color: ${({ theme }) => theme.colors.blue};
      }
   }
   & > svg {
      position: absolute;
      left: 18px;
      color: ${(props) => props.theme.colors.textGrey};
      top: 12px;
      height: 1.25em;
      width: 1.25em;
      ${(props) =>
         props.$isOpen === false
            ? `{
      left: 28px;
      
   }`
            : null}
   }
`;

export const NavItemText = styled.div`
   position: relative;
   right: 12px;
   visibility: hidden;
   opacity: 0;
   text-transform: uppercase;
   transition: all 0.1s;
   transition-property: right, visibility, opacity;
   font-weight: 700;
   ${(props) =>
      props.$isOpen === true
         ? `{
      right: 0;
      visibility: visible;
      opacity: 1;
   }`
         : null}
`;
