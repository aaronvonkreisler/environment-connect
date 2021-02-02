import styled from 'styled-components';

export const FlexRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: ${(props) => (props.justify ? props.justify : 'center')};
   align-items: ${(props) => (props.align ? props.align : 'center')};
`;

export const FlexCol = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   justify-content: ${(props) => (props.justify ? props.justify : 'center')};
   align-items: ${(props) => (props.align ? props.align : 'center')};
`;
