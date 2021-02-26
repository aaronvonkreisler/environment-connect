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
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const LoginCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.primary};
   max-width: 600px;
   min-width: 400px;
   border-radius: 4px;
   padding: 16px;
   @media ${({ theme }) => theme.device.mobile} {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
   }
`;

export const Logo = styled.img`
   height: 100px;
   width: 175px;
   overflow: hidden;
`;

export const WelcomeMessage = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;

   & > h5 {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 18px;
      font-weight: 700;
   }

   & > p {
      color: #9699a8;
      margin-bottom: 10px;
   }
`;

export const Copyright = styled.div`
   color: #9699a8;
   position: fixed;
   left: auto;
   right: auto;
   bottom: 24px;
   font-size: 15px;

   & > a {
      color: #9699a8;
      text-decoration: underline;
   }
`;
