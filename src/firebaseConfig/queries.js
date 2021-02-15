import { mergeDocAndId } from 'utils/utils';
import db from './db';

export const fetchNotes = async (plantId) => {
   try {
      const docRef = await db
         .collection('notes')
         .where('plant', '==', plantId)
         .get();
      const notes = docRef.docs.map(mergeDocAndId);
      return notes[0];
   } catch (err) {
      console.error(err);
   }
};
