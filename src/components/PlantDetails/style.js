import styled from 'styled-components';

export const DetailsContainer = styled.main`
   padding-left: 75px;
   margin-top: 66px;
   padding-right: 24px;
   width: 100%;
   height: 100%;
   margin-left: auto;
   margin-right: auto;
   display: block;
`;
export const DetailsGrid = styled.div`
   display: grid;
   grid-template-columns: 1.5fr;
   grid-template-rows: repeat(3, 1fr);
   gap: 0px 0px;
   grid-template-areas:
      'header'
      'details'
      'notes';
   @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 0.2fr 1.8fr;
      gap: 0px 0px;
      grid-template-areas:
         'header details'
         'notes details';
   }
`;
