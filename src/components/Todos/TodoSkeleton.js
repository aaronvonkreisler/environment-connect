import React from 'react';
import SkeletonPulse from 'components/common/SkeletonPulse';

function TodoSkeleton() {
   const items = new Array(12).fill(undefined).map((val, idx) => idx);
   return (
      <>
         {items.map((item, index) => (
            <SkeletonPulse key={index} height="40px" />
         ))}
      </>
   );
}

export default TodoSkeleton;
