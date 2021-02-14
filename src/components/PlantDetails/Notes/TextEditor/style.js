import styled from 'styled-components';

export const ContentContainer = styled.div`
   width: 100%;
   padding: 16px;
`;

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
   margin-top: 1em;
`;

export const HeadingTwo = styled.h2`
   font-size: 24px;
   font-weight: 400;
   margin-top: 1em;
`;

export const OrderedList = styled.ol`
   list-style-position: inside;
   margin-top: 1em;
`;

export const UnorderedList = styled.ul`
   list-style-position: inside;
   margin-top: 1em;
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

export const CenteredParagraph = styled.p`
   margin-top: 1em;
   text-align: center;
`;

export const LeftParagraph = styled.p`
   margin-top: 1em;
   text-align: left;
`;
export const RightParagraph = styled.p`
   margin-top: 1em;
   text-align: right;
`;

export const StyledToolbar = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   padding: 8px 8px 4px 8px;
   justify-content: flex-start;
   align-items: center;
   border-bottom: 1px solid ${({ theme }) => theme.colors.textGrey};
`;
