import styled from 'styled-components';

export const StyledBackground = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   overflow: hidden;
   transform: skewY(-22deg);
   transform-origin: 0;
   /* background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%); */
   background: linear-gradient(155deg, #53f 15%, #05d5ff 59%, #72efdd 94%);

   z-index: -1;
   & > :nth-child(1) {
      width: 50%;
      top: 0;
      left: 50%;
      background: #4c29ff;
      height: 150px;
      position: absolute;

      @media ${({ theme }) => theme.device.laptop} {
         top: 42%;
      }
      @media ${({ theme }) => theme.device.desktop} {
         top: 50%;
         height: 250px;
      }
   }
   & > :nth-child(2) {
      width: 30%;
      bottom: 0;
      background: #a1ffc8;
      height: 40px;
      position: absolute;

      @media ${({ theme }) => theme.device.desktop} {
         height: 120px;
      }
   }
   & > :nth-child(3) {
      width: 15%;
      bottom: 40px;
      background: #2be7ff;
      height: 40px;
      position: absolute;

      @media ${({ theme }) => theme.device.desktop} {
         height: 120px;
         bottom: 120px;
      }
   }
`;

export const LoginFormWrapper = styled.div`
   height: 100vh;
   width: 100vw;
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr;
   gap: 0px 0px;
   @media ${({ theme }) => theme.device.laptopAndUp} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
   }
`;

export const Title = styled.div`
   margin-left: 20px;
   font-size: 64px;
   color: #fff;
   font-weight: 700;
   font-style: italic;
   font-family: 'Rubik', sans-serif;
`;
