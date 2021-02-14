import styled from 'styled-components';

export const Bold = styled.strong`
   font-weight: 700;
`;

export const Italic = styled.em`
   font-style: italic;
`;

export const Underline = styled.u`
   text-decoration: underline;
`;

export const HeadingOne = styled.h1`
   font-size: 32px;
   font-weight: 700;
`;

export const HeadingTwo = styled.h2`
   font-size: 24px;
   font-weight: 400;
`;

export const OrderedList = styled.ol`
   list-style-position: inside;
`;

export const UnorderedList = styled.ul`
   list-style-position: inside;
`;

export const BlockQuote = styled.blockquote`
   border-left: 2px solid ${({ theme }) => theme.colors.textGrey};
   margin-top: 1em;
   padding-left: 10px;
   font-style: italic;
   color: ${({ theme }) => theme.colors.textGrey};
`;

export const Paragraph = styled.p`
   margin-top: 1em;
`;
