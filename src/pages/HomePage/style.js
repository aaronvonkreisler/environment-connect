import styled from 'styled-components';

export const HomeGrid = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   height: 100%;
   @media ${({ theme }) => theme.device.tabletAndDown} {
      flex-direction: column;
   }
`;

export const LeftSide = styled.div`
   display: flex;
   flex-direction: column;
   flex: 0.65;

   @media ${({ theme }) => theme.device.tabletAndDown} {
      flex-direction: row;
   }
`;

export const RightSide = styled.div`
   display: flex;
   flex-direction: column;
   flex: 0.35;
   @media ${({ theme }) => theme.device.tabletAndDown} {
      flex-direction: row;
   }
`;
