import React from 'react';
import { NotesContainer, NotesBody } from './style';
import TextEditor from 'components/PlantDetails/Notes/TextEditor';

function Notes() {
   return (
      <NotesContainer>
         <NotesBody>
            <TextEditor />
         </NotesBody>
      </NotesContainer>
   );
}

export default Notes;
