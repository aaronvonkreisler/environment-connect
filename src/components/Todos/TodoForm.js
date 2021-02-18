import React, { useState, useEffect } from 'react';
import useForm from 'hooks/useForm';
import { LabledInput, LabledSelect } from 'components/common/FormElements';
import { FlexCol, FlexRow } from 'components/common/StyledUtils';
import Button from 'components/common/Button';
import { ErrorMessage, ColorCircle } from './style';

const initialValue = {
   title: '',
   completed: false,
   dueDate: '',
   priority: 'low',
   details: '',
};

function TodoForm({ addTodo, setToggleForm, userId }) {
   const [disabled, setDisabled] = useState(true);

   const { formData, handleChange, validateInput, errors } = useForm(
      initialValue
   );
   const { title, dueDate, priority, details } = formData;

   const handleSubmit = () => {
      addTodo({ ...formData, user: userId });
      setToggleForm(false);
   };

   useEffect(() => {
      if (formData.title.length > 0) {
         setDisabled(false);
      } else {
         setDisabled(true);
      }
   }, [formData.title]);
   return (
      <>
         <FlexRow align="center" justify="flex-start">
            <LabledInput
               border
               id="title"
               name="title"
               inputType="text"
               value={title}
               onChange={handleChange}
               onBlur={validateInput}
               autoComplete={false}
            >
               Title
            </LabledInput>
         </FlexRow>
         {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
         <FlexRow
            align="center"
            justify="flex-start"
            fullWidth
            margin="10px 0 0 0"
         >
            <FlexCol style={{ marginRight: '20px' }}>
               <LabledSelect
                  border
                  id="priority"
                  name="priority"
                  inputType="text"
                  label="Priority"
                  value={priority}
                  onChange={handleChange}
                  onBlur={validateInput}
                  style={{ width: 'auto' }}
               >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
               </LabledSelect>
            </FlexCol>
            <FlexCol flexGrow="1">
               <LabledInput
                  border
                  id="due-date"
                  name="dueDate"
                  inputType="date"
                  value={dueDate}
                  onChange={handleChange}
                  onBlur={validateInput}
               >
                  Due date
               </LabledInput>
            </FlexCol>
         </FlexRow>
         <FlexRow align="center" justify="flex-start">
            <LabledInput
               border
               id="details"
               name="details"
               inputType="text"
               value={details}
               onChange={handleChange}
               onBlur={validateInput}
            >
               Details
            </LabledInput>
         </FlexRow>
         <div style={{ marginTop: '40px' }} />
         <FlexRow fullWidth>
            <Button
               text="Add task"
               onClick={handleSubmit}
               fullWidth
               disabled={disabled}
            />
         </FlexRow>
      </>
   );
}

export default TodoForm;
