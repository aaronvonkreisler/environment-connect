import React from 'react';
import { StyledFlexCol, StyledFlexRow } from './style';

export const FlexRow = ({ align, justify, fullWidth, ...props }) => {
   return (
      <StyledFlexRow
         $align={align}
         $justify={justify}
         {...props}
         style={fullWidth ? { width: '100%' } : null}
      >
         {props.children}
      </StyledFlexRow>
   );
};

export const FlexCol = ({ align, justify, fullWidth, ...props }) => {
   return (
      <StyledFlexCol $align={align} $justify={justify} {...props}>
         {props.children}
      </StyledFlexCol>
   );
};
