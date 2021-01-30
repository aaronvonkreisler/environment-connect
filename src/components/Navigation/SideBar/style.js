import styled from 'styled-components';

export const StyledSidebar = styled.aside`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background: ${({ theme }) => theme.colors.primary};
   border-right: ${({ theme }) => theme.colors.border};
   height: 100vh;
   text-align: left;
   position: absolute;
   width: ${(props) => (props.isOpen ? '200px' : '75px')};
   top: 0;
   left: 0;
   z-index: 100;
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   transition: all 0.1s ease 0s;
   transform: translateZ(0px);

   @media ${({ theme }) => theme.device.mobile} {
      visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
      width: ${(props) => props.isOpen && '100vw'};
   }
`;

export const NavItem = styled.div`
   position: relative;
   width: 100%;
   height: 42px;
   line-height: 42px;
   padding-left: 64px;
   color: ${({ theme }) => theme.colors.textPrimary};
   &:hover {
      background: rgba(255, 255, 255, 0.1);
   }

   & > svg {
      position: absolute;
      left: 18px;
      color: white !important;
      top: 12px;
      height: 1.25em;
      ${(props) =>
         props.isOpen === false &&
         `{
      left: 22px;
      
   }`}
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
   ${(props) =>
      props.isOpen &&
      `{
      right: 0;
      visibility: visible;
      opacity: 1;
   }`}
`;
