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
      console.log(formData);
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
   };

   return { formData, handleChange, validateInput, errors };
};

export default useForm;
