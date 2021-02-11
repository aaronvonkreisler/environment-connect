import styled from 'styled-components';

export const HeaderContainer = styled.div`
   grid-area: header;
   position: relative;
`;

export const Title = styled.div`
   font-size: 48px;
   font-weight: 500;
   font-family: 'Rubik', sans-serif;
   position: absolute;
   top: 0;
   margin-left: 24px;
   @media ${({ theme }) => theme.device.tablet} {
      font-size: 54px;
   }
   @media ${({ theme }) => theme.device.laptopAndUp} {
      font-size: 68px;
   }
`;

export const DetailsRow = styled.div`
   min-height: 50px;
   width: 100%;
   margin-bottom: 10px;
   position: absolute;
   bottom: 0;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: baseline;

   & > :nth-child(1) {
      display: flex;
      flex-direction: row;
      margin-left: 24px;
      height: 100%;
   }
   & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      z-index: 2;
      align-items: flex-end;
      padding-right: 5px;
      height: 100%;
   }
`;

export const DetailsPill = styled.div`
   min-height: 20px;
   background-color: #212121;
   border-radius: 2px;
   display: flex;
   flex-direction: column;
   margin-right: 10px;

   box-shadow: ${({ theme }) => theme.elevation.one};

   & > span {
      padding: 0 10px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textGrey};
   }
`;
