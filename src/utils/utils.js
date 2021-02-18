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
      return {
         text: '#0b6e4f',
         bg: 'rgba(25, 184, 144, 0.73)',
         contrast: '#fff',
      };
   } else if (level === 'high') {
      return {
         text: '#d90b00',
         bg: 'rgba(238, 32, 63, 0.86)',
         contrast: '#fff',
      };
   } else {
      return { text: '#212529', bg: '#6c757d', contrast: '#fff' };
   }
};

// date from date picker is in yyyy-mm-dd format
// returns a format on mon, dd ex: Jan, 12
export const formatDate = (date) => {
   const monthsArr = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
   ];

   const dates = date.split('-');
   const monthNum = Number(dates[1]);
   const dayNum = dates[2];
   const monthName = monthsArr[monthNum - 1];

   return `${monthName}, ${dayNum}`;
};
