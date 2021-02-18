export const mergeDocAndId = (doc) => {
   return {
      id: doc.id,
      ...doc.data(),
   };
};

export const getColorForLayer = (layerName) => {
   const layer = layerName.toLowerCase();

   if (layer === 'canopy') {
      // return '#27D545';
      return '#14cba8';
   } else if (layer === 'low tree') {
      return '#2bbd7e';
   } else if (layer === 'vertical') {
      return '#40c4ff';
   } else if (layer === 'shrub') {
      return '#fbc02d';
   } else if (layer === 'rhizosphere') {
      return '#ff6e40';
   } else if (layer === 'herbaveous') {
      return '#ee98fb';
   } else if (layer === 'soil surface') {
      return '#8d6e63';
   }
};

export const getPriorityColor = (priority) => {
   const level = priority.toLowerCase();
   if (level === 'medium') {
      return { text: '#0b6e4f', bg: '' };
   } else if (level === 'high') {
      return { text: '#d90b00', bg: '' };
   } else {
      return { text: '#212529', bg: '' };
   }
};
