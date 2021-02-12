import styled, { css } from 'styled-components';

export const DetailsContainer = styled.div`
   grid-area: details;
   display: none;
   @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
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

export const SunGradient = styled.div`
   position: absolute;
   bottom: 0;
   height: 2px;
   width: 100%;

   background: rgb(72, 69, 124);
   background: linear-gradient(
      248deg,
      rgba(72, 69, 124, 0.586338759136467) 2%,
      rgba(231, 67, 67, 0.5415208319655987) 35%,
      rgba(255, 200, 0, 0.5555264342064952) 100%
   );
`;

export const SeasonsGradient = styled.div`
   position: absolute;
   bottom: 0;
   height: 2px;
   width: 100%;
   background: rgb(69, 124, 113);
   background: linear-gradient(
      248deg,
      rgba(69, 124, 113, 0.4546860980720413) 15%,
      rgba(206, 231, 67, 0.409868170901173) 45%,
      rgba(0, 255, 251, 0.3650502437303046) 100%
   );
`;
