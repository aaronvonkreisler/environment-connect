import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledSelect } from './style';

export function Input({ ...props }) {
   return (
      <StyledInput
         type={props.inputType}
         defaultValue={props.defaultValue}
         value={props.value}
         placeholder={props.placeholder}
         onChange={props.onChange}
         autoFocus={props.autoFocus}
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
