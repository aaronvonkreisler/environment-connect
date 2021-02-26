import React from 'react';
import image from 'images/404-error.gif';

function NotFoundPage() {
   return (
      <div style={{ height: '100%', width: '100%' }}>
         Not Found
         <img src={image} alt="Page not found" />
      </div>
   );
}

export default NotFoundPage;
