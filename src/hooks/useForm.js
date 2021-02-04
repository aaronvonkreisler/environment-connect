import { useState } from 'react';

const useForm = (initialState = {}) => {
   const [formData, setFormData] = useState(initialState);
   const [errors, setErrors] = useState(initialState);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
      setErrors({
         ...errors,
         [e.target.name]: '',
      });
   };

   const validateInput = (e) => {
      const target = e.target;

      let error = '';

      if (!target.value) {
         error = 'This field is required';

         setErrors({
            ...errors,
            [target.name]: error,
         });
      }

      if (target.name === 'plantName') {
         const formattedName = capitalizeWords(formData.plantName);
         setFormData({
            ...formData,
            plantName: formattedName,
         });
      }
   };

   const resetFormState = (initialState) => {
      setFormData(initialState);
      setErrors(initialState);
   };

   const capitalizeWords = (text, field) => {
      const words = text
         .toLowerCase()
         .split(' ')
         .map((word, index) => word.charAt(0).toUpperCase() + word.slice(1))
         .join(' ');

      return words;
   };

   return {
      formData,
      handleChange,
      validateInput,
      errors,
      resetFormState,
   };
};

export default useForm;
