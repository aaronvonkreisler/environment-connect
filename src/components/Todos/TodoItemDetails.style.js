import styled from 'styled-components';

export const PriorityBadge = styled.div`
   display: inline-block;
   padding: 0.2em 0.55em;
   font-size: 0.65em;
   font-weight: 500;
   background-color: ${(props) => props.$bg || '#6c757'};
   border-radius: 4px;
   color: ${(props) => props.$color || '#fff'};
`;

export const StyledDate = styled.span`
   font-size: 15px;
   color: ${({ theme }) => theme.colors.textGrey};
`;
