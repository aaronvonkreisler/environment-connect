import React from 'react';
import Button from '../components/Button';
function ProjectsPage() {
   return (
      <div>
         Projects Page
         <Button outline onClick={() => alert('hi')} />
      </div>
   );
}

export default ProjectsPage;
