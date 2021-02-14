import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContainer, NotesBody } from './style';
import TextEditor from 'components/PlantDetails/Notes/TextEditor';
import db from 'firebaseConfig/db';
import { mergeDocAndId } from 'utils/utils';

function Notes() {
   const [notes, setNotes] = useState(null);
   window.notes = notes;
   const { id } = useParams();

   const fetchNotes = async (plantId) => {
      try {
         const docRef = await db
            .collection('notes')
            .where('plant', '==', plantId)
            .get();
         const notes = docRef.docs.map(mergeDocAndId);
         setNotes(notes[0]);
      } catch (err) {
         console.error(err);
      }
   };

   useEffect(() => {
      fetchNotes(id);
   }, [id]);
   return (
      <NotesContainer>
         <NotesBody>
            <TextEditor plantId={id} notes={notes} />
         </NotesBody>
      </NotesContainer>
   );
}

export default Notes;
