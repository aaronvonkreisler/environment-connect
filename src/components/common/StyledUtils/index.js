import React from 'react';
import { StyledFlexCol, StyledFlexRow } from './style';

export const FlexRow = ({
   align,
   justify,
   fullWidth,
   margin,
   flexGrow,
   flexBasis,
   ...props
}) => {
   return (
      <StyledFlexRow
         $align={align}
         $justify={justify}
         $margin={margin}
         $flexGrow={flexGrow}
         $fullWidth={fullWidth}
         $flexBasis={flexBasis}
         {...props}
      >
         {props.children}
      </StyledFlexRow>
   );
};

export const FlexCol = ({
   align,
   justify,
   fullWidth,
   flexGrow,
   flexBasis,
   margin,
   ...props
}) => {
   return (
      <StyledFlexCol
         $align={align}
         $justify={justify}
         $flexGrow={flexGrow}
         $fullWidth={fullWidth}
         $flexBasis={flexBasis}
         $margin={margin}
         {...props}
      >
         {props.children}
      </StyledFlexCol>
   );
};

FlexCol.defaultProps = {
   fullWidth: true,
};
