import styled from 'styled-components';

export const WelcomeCard = styled.div`
   display: flex;
   flex-direction: column;
   /* max-width: 800px;
   min-width: 650px; */
   min-height: 250px;
   border-radius: 4px;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.blueRGB};
   box-shadow: ${({ theme }) => theme.elevation.two};
   margin-bottom: 32px;

   @media ${({ theme }) => theme.device.desktop} {
      max-width: 50vw;
   }
`;
