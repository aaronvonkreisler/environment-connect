import React from 'react';
import { NotesContainer, NotesBody, NotesTitle, EditorWrapper } from './style';
import TextEditor from 'components/PlantDetails/Notes/TextEditor';
function Notes() {
   return (
      <NotesContainer>
         <NotesBody>
            <NotesTitle>Notes</NotesTitle>
            <EditorWrapper />
            <TextEditor />
         </NotesBody>
      </NotesContainer>
   );
}

export default Notes;
