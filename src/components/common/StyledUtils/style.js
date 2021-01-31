import styled from 'styled-components';

export const FlexRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: ${(props) => (props.justify ? props.justify : 'center')};
   align-items: ${(props) => (props.align ? props.align : 'center')};
`;
