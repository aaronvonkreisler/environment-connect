export const mergeDocAndId = (doc) => {
   return {
      id: doc.id,
      ...doc.data(),
   };
};
