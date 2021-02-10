import styled from 'styled-components';

export const DetailsContainer = styled.div`
   grid-area: details;
   display: none;
   @media (min-width: 768px) {
      display: flex;
   }
`;

export const DetailsCard = styled.div`
   background-color: ${({ theme }) => theme.colors.containerGrey};
   width: 100%;
   height: 100%;
   margin-top: 20px;
   border-radius: 4px;
   display: flex;
   flex-direction: column;
   padding: 16px;
`;

export const Title = styled.div`
   display: flex;
   flex-direction: row;
   color: ${({ theme }) => theme.colors.textPrimary};
   font-size: 18px;
   font-weight: 500;
   border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
   padding-bottom: 5px;
   justify-content: space-between;
   align-items: center;
`;

export const DetailItem = styled.div`
   display: flex;
   flex-direction: row;
   padding-top: 10px;
   justify-content: flex-start;
   align-items: center;

   & > svg {
      margin-right: 5px;
      height: 1.25em;
      width: 1.25em;
   }
`;
