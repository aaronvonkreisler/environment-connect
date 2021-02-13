import React from 'react';
import { useSlate } from 'slate-react';

import IconButton from 'components/common/IconButton';
import { isBlockActive, toggleMark } from './utils';

const MarkButton = ({ format, icon }) => {
   const editor = useSlate();
   return (
      <IconButton
         small
         active={isBlockActive(editor, format)}
         onClick={(e) => {
            e.preventDefault();
            toggleMark(editor, format);
            console.log(editor);
            console.log(format);
         }}
      >
         {icon}
      </IconButton>
   );
};

export default MarkButton;
