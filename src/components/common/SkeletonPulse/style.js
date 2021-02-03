import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
   0% {
   opacity: 1;
   }
   50% {
   opacity: 0.4;
   }
   100% {
   opacity: 1;
   }
`;
export const PulseBar = styled.span`
   width: 100%;
   display: block;
   background-color: rgba(255, 255, 255, 0.13);
   transform: scale(1, 0.5);
   margin-top: 0;
   border-radius: 4px;
   transform-origin: 0 60%;
   animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
   height: ${(props) => props.$height || '25px'};
`;
