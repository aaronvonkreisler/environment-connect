import React from 'react';
import PropTypes from 'prop-types';
import {
   StyledInput,
   StyledSelect,
   StyledLabel,
   StyledLableInput,
   StyledLabelSelect,
   CheckboxLabel,
   CheckboxInput,
   Checkmark,
   Icon,
} from './style';

import { BsCheck } from 'react-icons/bs';

export function Input({ ...props }) {
   return (
      <StyledInput
         type={props.inputType}
         defaultValue={props.defaultValue}
         value={props.value}
         placeholder={props.placeholder}
         onChange={props.onChange}
         autoFocus={props.autoFocus}
         onBlur={props.onBlur}
         disabled={props.disabled}
         name={props.name}
      />
   );
}

Input.propTypes = {
   inputType: PropTypes.string.isRequired,
};

export function Select({ ...props }) {
   return <StyledSelect {...props}>{props.children}</StyledSelect>;
}

export function LabledInput({ ...props }) {
   return (
      <StyledLabel
         htmlFor={props.id}
         $border={props.border}
         $spacing={props.spacing}
         $borderSmall={props.borderSmall}
      >
         {props.children}
         <StyledLableInput
            id={props.id}
            type={props.inputType}
            defaultValue={props.defaultValue}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
            autoFocus={props.autoFocus}
            disabled={props.disabled}
            name={props.name}
         />
      </StyledLabel>
   );
}

LabledInput.propTypes = {
   id: PropTypes.string.isRequired,
   inputType: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   value: PropTypes.string.isRequired,
};

export function LabledSelect({ ...props }) {
   return (
      <StyledLabel
         htmlFor={props.id}
         $border={props.border}
         $spacing={props.spacing}
         $borderSmall={props.borderSmall}
      >
         {props.label}
         <StyledLabelSelect {...props}>{props.children}</StyledLabelSelect>
      </StyledLabel>
   );
}

export function Checkbox({ ...props }) {
   return (
      <CheckboxLabel>
         <CheckboxInput
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}
         />
         <Checkmark checked={props.checked}>
            <Icon>
               <BsCheck />
            </Icon>
         </Checkmark>
      </CheckboxLabel>
   );
}
