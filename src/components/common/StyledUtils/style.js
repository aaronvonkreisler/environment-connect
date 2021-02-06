import styled from 'styled-components';

export const StyledFlexRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: ${(props) => props.$justify || 'center'};
   align-items: ${(props) => props.$align || 'center'};
`;

export const StyledFlexCol = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   justify-content: ${(props) => props.$justify || 'center'};
   align-items: ${(props) => props.$align || 'center'};
`;
