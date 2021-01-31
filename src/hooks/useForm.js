import { useState } from 'react';

const useForm = (initialState = {}) => {
   const [formData, setFormData] = useState(initialState);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
      console.log(formData);
   };

   return { formData, handleChange };
};

export default useForm;
