import React, { useCallback, useMemo, useState } from 'react';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import {
   Editor,
   Transforms,
   createEditor,
   Node,
   Element as SlateElement,
} from 'slate';
import isHotkey from 'is-hotkey';
import { withHistory } from 'slate-history';
import Leaf from './Leaf';
import Element from './Element';
import MarkButton from './MarkButton';
import { BiBold, BiUnderline, BiItalic } from 'react-icons/bi';
import { toggleMark } from './utils';
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
         <div id="toolbar" style={{ width: '100%' }}>
            <MarkButton format="bold" icon={<BiBold />} />
            <MarkButton format="italic" icon={<BiItalic />} />
            <MarkButton format="underline" icon={<BiUnderline />} />
         </div>
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
      </Slate>
   );
}

export default TextEditor;
