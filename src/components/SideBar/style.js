import styled from 'styled-components';

export const StyledSidebar = styled.nav`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background: ${({ theme }) => theme.colors.primary};
   border-right: ${({ theme }) => theme.colors.border};
   height: 100vh;
   text-align: left;
   position: absolute;
   width: 75px;
   top: 0;
   left: 0;
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

   @media ${({ theme }) => theme.device.mobile} {
      display: none;
   }
`;
