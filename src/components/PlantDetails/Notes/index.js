import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContainer, NotesBody } from './style';
import TextEditor from 'components/PlantDetails/Notes/TextEditor';
import { fetchNotes } from 'firebaseConfig/queries';

function Notes() {
   const [notes, setNotes] = useState(null);
   const { id } = useParams();

   const getNotes = async () => {
      const note = await fetchNotes(id);
      setNotes(note);
   };

   useEffect(() => {
      getNotes();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <NotesContainer>
         <NotesBody>
            <TextEditor notes={notes} />
         </NotesBody>
      </NotesContainer>
   );
}

export default Notes;
