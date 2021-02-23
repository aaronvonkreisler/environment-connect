import styled from 'styled-components';

export const HeaderContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   min-width: 0;
   position: relative;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
`;

export const Title = styled.div`
   font-size: 32px;
   font-weight: 500;
   font-family: 'Rubik', sans-serif;
   position: absolute;
   top: 0;
   margin-left: 16px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   max-width: 95%;
   @media ${({ theme }) => theme.device.tablet} {
      font-size: 48px;
   }
   @media ${({ theme }) => theme.device.laptopAndUp} {
      font-size: 62px;
   }
`;

export const SkeletonTitle = styled.div`
   position: absolute;
   top: 0;
   width: 100%;
`;

export const DetailsRow = styled.div`
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
      margin-left: 16px;
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

   @media ${({ theme }) => theme.device.mobile} {
      margin-bottom: 5px;
   }
`;

export const DetailsPill = styled.div`
   min-height: 20px;
   min-width: 100px;
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
