import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import isHotkey from 'is-hotkey';
import { withHistory } from 'slate-history';
import Leaf from './Leaf';
import Element from './Element';
import Toolbar from './Toolbar';
import { toggleMark } from './utils';
import { ContentContainer } from './style';
import useDebounce from 'hooks/useDebounce';
import db from 'firebaseConfig/db';

const initialValue = [
   {
      type: 'paragraph',
      children: [{ text: ' ' }],
   },
];

const HOTKEYS = {
   'mod+b': 'bold',
   'mod+i': 'italic',
   'mod+u': 'underline',
};

function TextEditor({ notes }) {
   const [value, setValue] = useState(initialValue);
   const editor = useMemo(() => withHistory(withReact(createEditor())), []);
   const renderElement = useCallback((props) => <Element {...props} />, []);
   const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
   const debouncedValue = useDebounce(value, 1000);

   useEffect(() => {
      if (notes?.content) {
         const parsedNotes = JSON.parse(notes.content);
         setValue(parsedNotes);
      }
   }, [notes]);

   const formatData = (data) => {
      return JSON.stringify(data);
   };

   const handleSave = async (notesId, data) => {
      console.log('from save -- plant:', notesId);
      // const updates = formatData(data);
      await db.doc(`notes/${notesId}`).update({ content: data });
   };

   useEffect(() => {
      if (debouncedValue && notes !== null) {
         const updates = formatData(debouncedValue);
         handleSave(notes.id, updates);
      }

      // Only want it to fire when text is changed. If plant Id
      // is included in the dependency array it will update when
      // the component first mounts as well.

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [debouncedValue]);
   return (
      <Slate
         editor={editor}
         value={value}
         onChange={(newValue) => setValue(newValue)}
      >
         <Toolbar />
         <ContentContainer>
            <Editable
               autoFocus
               spellCheck
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
