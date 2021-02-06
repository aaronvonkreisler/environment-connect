import React from 'react';
import { StyledFlexCol, StyledFlexRow } from './style';

export const FlexRow = ({ align, justify, ...props }) => {
   return (
      <StyledFlexRow $align={align} $justify={justify} {...props}>
         {props.children}
      </StyledFlexRow>
   );
};

export const FlexCol = ({ align, justify, ...props }) => {
   return (
      <StyledFlexCol $align={align} $justify={justify} {...props}>
         {props.children}
      </StyledFlexCol>
   );
};
