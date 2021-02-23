import styled from 'styled-components';

export const DetailsContainer = styled.main`
   margin-top: 66px;
   width: 100%;
   height: 100%;
   margin-left: auto;
   margin-right: auto;
   display: block;

   /* @media (min-width: 501px) {
      padding-left: 24px;
      padding-right: 24px;
   } */

   @media (min-width: 768px) {
      padding-right: 24px;
      padding-left: 24px;
   }
`;
export const DetailsGrid = styled.div`
   display: flex;
   flex: 1 100%;
`;

export const LeftSide = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   min-width: 0;

   @media (min-width: 768px) {
      flex: 0.7;
   }
`;
export const RightSide = styled.div`
   flex: 0;
   display: none;
   @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      flex: 0.3;
      padding-left: 20px;
   }
`;
