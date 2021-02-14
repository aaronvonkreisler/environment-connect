import React from 'react';
import { Bold, Italic, Underline } from './style';

function Leaf({ attributes, children, leaf }) {
   if (leaf.bold) {
      children = <Bold>{children}</Bold>;
   }

   if (leaf.italic) {
      children = <Italic>{children}</Italic>;
   }

   if (leaf.underline) {
      children = <Underline>{children}</Underline>;
   }

   return <span {...attributes}>{children}</span>;
}

export default Leaf;
