import React from 'react';
import { useSlate } from 'slate-react';
import { isBlockActive, toggleBlock } from './utils';
import IconButton from 'components/common/IconButton';

function BlockButton({ format, icon }) {
   const editor = useSlate();

   return (
      <IconButton
         style={{ marginRight: '4px' }}
         small
         active={isBlockActive(editor, format)}
         onClick={(e) => {
            e.preventDefault();
            toggleBlock(editor, format);
         }}
      >
         {icon}
      </IconButton>
   );
}

export default BlockButton;
