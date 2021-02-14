import React from 'react';
import { useSlate } from 'slate-react';

import IconButton from 'components/common/IconButton';
import { isMarkActive, toggleMark } from './utils';

const MarkButton = ({ format, icon }) => {
   const editor = useSlate();
   return (
      <IconButton
         style={{ marginRight: '4px' }}
         small
         active={isMarkActive(editor, format)}
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
