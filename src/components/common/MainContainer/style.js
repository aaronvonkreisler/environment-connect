import styled from 'styled-components';

export const Container = styled.main`
   position: relative;
   margin-top: 96px;
   padding-left: 99px;
   padding-right: 24px;
   margin-left: auto;
   margin-right: auto;

   @media ${(props) => props.theme.device.mobile} {
      padding-left: 16px;
      padding-right: 16px;
   }
`;
