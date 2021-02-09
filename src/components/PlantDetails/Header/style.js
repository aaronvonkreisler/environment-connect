import styled from 'styled-components';

export const HeaderContainer = styled.div`
   grid-area: header;
   position: relative;
   max-width: 600px;
`;

export const Title = styled.div`
   font-size: 48px;
   font-weight: 500;
   font-family: 'Rubik', sans-serif;
   position: absolute;
   top: 0;

   left: 1%;

   @media ${({ theme }) => theme.device.tablet} {
      font-size: 54px;
   }
   @media ${({ theme }) => theme.device.laptopAndUp} {
      font-size: 68px;
   }
`;
