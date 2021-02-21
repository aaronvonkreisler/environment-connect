import styled, { css, keyframes } from 'styled-components';

export const DetailsContainer = styled.div`
   display: none;
   @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: sticky;
      top: 30px;
   }
`;

export const DetailsCard = styled.div`
   background-color: ${({ theme }) => theme.colors.paper};
   width: 100%;
   max-width: 400px;
   margin-top: 10px;
   border-radius: 4px;
   display: flex;
   flex-direction: row;
   box-shadow: ${({ theme }) => theme.elevation.three};
   position: relative;
   overflow: hidden;
   ${(props) =>
      props.$tall &&
      css`
         padding: 14px 0;
      `}
   ${(props) =>
      props.$last &&
      css`
         margin: 24px 0;
      `}
`;

export const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

export const Label = styled.div`
   display: flex;
   flex-direction: row;
   color: ${({ theme }) => theme.colors.textGrey};
   font-size: ${(props) => (props.$small ? '14px' : '16px')};
   font-weight: 500;
   padding-bottom: 5px;
   justify-content: flex-start;
   align-items: center;
   padding: 4px 16px;
`;

export const Text = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   overflow: hidden;
   z-index: 2;
   padding: 0 16px;
   min-height: 16px;
   margin-bottom: 10px;
   & > span {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: ${(props) => (props.$small ? '16px' : '2rem')};
      font-family: 'Rubik', sans-serif;
      font-style: ${(props) => (props.$small ? 'none' : 'italic')};
   }
   & > svg {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 2rem;
      margin-right: 4px;
   }
`;

export const MessageContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   height: 100%;
   align-items: flex-start;
   min-height: 300px;
   padding: 16px;
`;

const tilt = keyframes`
{
   0% {
      transform: translate(-50%, -50%) skewY(3deg);
   }
   50% {
      transform: translate(-50%, -50%) skewY(-3deg);
   }
   100% {
      transform: translate(-50%, -50%) skewY(3deg);
   }
}
`;

export const RocketIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   width: 100%;
   min-height: 200px;
   position: relative;
   & > svg {
      height: 8rem;
      width: 8rem;
      color: ${({ theme }) => theme.colors.textGrey};
      animation: ${tilt} linear 3s infinite;
      position: absolute;
      top: 50%;
      left: 50%;
   }
`;

export const SecondaryText = styled.span`
   color: ${({ theme }) => theme.colors.textGrey};
   font-size: ${(props) => props.$size || '16px'};
   margin: 5px 0;
`;
