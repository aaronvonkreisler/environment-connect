import React, { useCallback, useMemo, useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import isHotkey from 'is-hotkey';
import { withHistory } from 'slate-history';
import Leaf from './Leaf';
import Element from './Element';
import Toolbar from './Toolbar';
import { toggleMark } from './utils';
import { ContentContainer } from './style';
const initialValue = [
   {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
   },
];

const HOTKEYS = {
   'mod+b': 'bold',
   'mod+i': 'italic',
   'mod+u': 'underline',
};

function TextEditor() {
   const [value, setValue] = useState(initialValue);
   const editor = useMemo(() => withHistory(withReact(createEditor())), []);
   const renderElement = useCallback((props) => <Element {...props} />, []);
   const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
   return (
      <Slate
         editor={editor}
         value={value}
         onChange={(newValue) => setValue(newValue)}
      >
         <Toolbar />
         <ContentContainer>
            <Editable
               renderElement={renderElement}
               renderLeaf={renderLeaf}
               onKeyDown={(event) => {
                  for (const hotkey in HOTKEYS) {
                     if (isHotkey(hotkey, event)) {
                        event.preventDefault();
                        const mark = HOTKEYS[hotkey];
                        toggleMark(editor, mark);
                     }
                  }
               }}
            />
         </ContentContainer>
      </Slate>
   );
}

export default TextEditor;
