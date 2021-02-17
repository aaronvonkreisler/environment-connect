import styled from 'styled-components';

export const StyledFlexRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: ${(props) => props.$justify || 'center'};
   align-items: ${(props) => props.$align || 'center'};
   margin: ${(props) => props.$margin || 0};
   width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
   flex-grow: ${(props) => props.$flexGrow || 0};
   flex-basis: ${(props) => props.$flexBasis || 0};
`;

export const StyledFlexCol = styled.div`
   display: flex;
   flex-direction: column;
   width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
   height: 100%;
   justify-content: ${(props) => props.$justify || 'center'};
   align-items: ${(props) => props.$align || 'center'};
   flex-grow: ${(props) => props.$flexGrow || 0};
   flex-basis: ${(props) => props.$flexBasis || 0};
   margin: ${(props) => props.$margin || 0};
`;
