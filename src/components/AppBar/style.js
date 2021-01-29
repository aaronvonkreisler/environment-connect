import styled from 'styled-components';

export const AppBarRoot = styled.header`
   width: 100%;
   display: flex;
   flex-direction: column;
   height: 65px;
   padding: 0 24px;
   background-color: ${(props) => props.theme.colors.primary};
   color: ${(props) => props.theme.colors.textPrimary};
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   position: fixed;
   top: 0;
   left: auto;
   right: 0;

   @media ${(props) => props.theme.device.mobile} {
      bottom: 0;
      top: auto;
   }
`;
