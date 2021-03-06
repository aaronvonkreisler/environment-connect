import React from 'react';
import {
   HeadingOne,
   HeadingTwo,
   OrderedList,
   UnorderedList,
   BlockQuote,
   LeftParagraph,
} from './style';

function Element({ attributes, children, element }) {
   switch (element.type) {
      case 'block-quote':
         return <BlockQuote {...attributes}>{children}</BlockQuote>;
      case 'bulleted-list':
         return <UnorderedList {...attributes}>{children}</UnorderedList>;
      case 'heading-one':
         return <HeadingOne {...attributes}>{children}</HeadingOne>;
      case 'heading-two':
         return <HeadingTwo {...attributes}>{children}</HeadingTwo>;
      case 'list-item':
         return <li {...attributes}>{children}</li>;
      case 'numbered-list':
         return <OrderedList {...attributes}>{children}</OrderedList>;
      default:
         return <LeftParagraph {...attributes}>{children}</LeftParagraph>;
   }
}

export default Element;
