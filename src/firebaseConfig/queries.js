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

export const getAllTodos = async (userId) => {
   try {
      const docRef = await db
         .collection('todos')
         .where('user', '==', userId)
         .get();
      const todos = docRef.docs.map(mergeDocAndId);
      return todos;
   } catch (err) {
      throw new Error(err.message);
   }
};

export const createTodo = async (todo) => {
   try {
      const docRef = await db.collection('todos').add(todo);
      const doc = await docRef.get();

      const todoItem = mergeDocAndId(doc);
      return todoItem;
   } catch (err) {
      throw new Error(err.message);
   }
};

export const completeTodo = async (id, completed) => {
   try {
      await db.doc(`/todos/${id}`).update({ completed });
   } catch (err) {
      throw new Error(err.message);
   }
};

export const searchPlantByLayer = async (layer, userId) => {
   try {
      const ref = await db
         .collection('plants')
         .where('layer', '==', layer, '&&', 'user', '==', userId)
         .get();
      const results = ref.docs.map(mergeDocAndId);

      const currentUsersResults = results.filter((res) => res.user === userId);
      return currentUsersResults;
   } catch (err) {
      throw new Error(err.message);
   }
};

export const searchByDesiredSun = async (desiredSun, userId) => {
   try {
      const ref = await db
         .collection('plants')
         .where('desiredSun', '==', desiredSun)
         .get();

      const results = ref.docs.map(mergeDocAndId);
      const currentUsersResults = results.filter((res) => res.user === userId);
      return currentUsersResults;
   } catch (err) {
      throw new Error(err.message);
   }
};
