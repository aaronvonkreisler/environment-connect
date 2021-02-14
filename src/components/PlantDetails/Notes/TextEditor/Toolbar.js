import React from 'react';
import { BiBold, BiUnderline, BiItalic } from 'react-icons/bi';
import {
   MdFormatSize,
   MdFormatQuote,
   MdTitle,
   MdFormatListNumbered,
   MdFormatListBulleted,
} from 'react-icons/md';
import MarkButton from './MarkButton';
import BlockButton from './BlockButton';
import { StyledToolbar } from './style';

function Toolbar(props) {
   return (
      <StyledToolbar>
         <MarkButton format="bold" icon={<BiBold />} />
         <MarkButton format="italic" icon={<BiItalic />} />
         <MarkButton format="underline" icon={<BiUnderline />} />
         <BlockButton format="heading-one" icon={<MdFormatSize />} />
         <BlockButton format="heading-two" icon={<MdTitle />} />
         <BlockButton format="numbered-list" icon={<MdFormatListNumbered />} />
         <BlockButton format="bulleted-list" icon={<MdFormatListBulleted />} />
         <BlockButton format="block-quote" icon={<MdFormatQuote />} />
      </StyledToolbar>
   );
}

export default Toolbar;
