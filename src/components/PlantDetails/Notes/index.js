import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContainer, NotesBody } from './style';
import TextEditor from 'components/PlantDetails/Notes/TextEditor';
import db from 'firebaseConfig/db';
import { mergeDocAndId } from 'utils/utils';

function Notes() {
   const [notes, setNotes] = useState(null);
   const { id } = useParams();

   const fetchNotes = async (plantId) => {
      const docRef = await db
         .collection('notes')
         .where('plant', '==', plantId)
         .get();
      const notes = docRef.docs.map(mergeDocAndId);
      setNotes(notes[0]);
   };

   useEffect(() => {
      fetchNotes(id);
      console.log('fetching');
   }, [id]);
   return (
      <NotesContainer>
         <NotesBody>
            <TextEditor notes={notes} />
         </NotesBody>
      </NotesContainer>
   );
}

export default Notes;
