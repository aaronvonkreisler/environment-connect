import { useMemo, useState } from 'react';

const useSortableData = (items, config = null) => {
   const [sortConfig, setSortConfig] = useState(config);

   const sortedItems = useMemo(() => {
      const sortableItems = [...items];

      if (sortConfig !== null) {
         sortableItems.sort((a, b) => {
            const key = sortConfig.key;
            if (a[key] < b[key]) {
               return sortConfig.direction === 'ascending' ? -1 : 1;
            }

            if (a[key] > b[key]) {
               return sortConfig.direction === 'ascending' ? 1 : -1;
            }

            return 0;
         });
      }
      return sortableItems;
   }, [items, sortConfig]);

   const requestSortBy = (key) => {
      let direction = 'ascending';

      if (
         sortConfig &&
         sortConfig.key === key &&
         sortConfig.direction === 'ascending'
      ) {
         direction = 'descending';
      }

      setSortConfig({ key, direction });
   };

   return { items: sortedItems, requestSortBy, sortConfig };
};

export default useSortableData;
