import styled from 'styled-components';

export const PriorityBadge = styled.div`
   display: inline-block;
   padding: 0.2em 0.55em;
   font-size: 0.65em;
   background-color: #6c757d;
   border-radius: 4px;
   color: ${(props) => props.$color || '#fff'};
`;
