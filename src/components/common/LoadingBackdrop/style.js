import styled, { keyframes } from 'styled-components';

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: ${({ theme }) => theme.colors.background};
   z-index: 1200;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const logoSpin = keyframes`
    0% {
        transform: rotateY(0deg)
    }
    100% {
        transform: rotateY(360deg)
    }
 
`;

export const Logo = styled.img`
   width: 65px;
   height: 65px;
   overflow: hidden;
   animation: ${logoSpin} infinite 1.5s linear;
`;
