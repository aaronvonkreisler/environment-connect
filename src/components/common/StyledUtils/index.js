import React from 'react';
import { StyledFlexCol, StyledFlexRow } from './style';

export const FlexRow = ({ align, justify, fullWidth, margin, ...props }) => {
   return (
      <StyledFlexRow
         $align={align}
         $justify={justify}
         $margin={margin}
         {...props}
         style={fullWidth ? { width: '100%' } : null}
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
   ...props
}) => {
   return (
      <StyledFlexCol
         $align={align}
         $justify={justify}
         $flexGrow={flexGrow}
         $fullWidth={fullWidth}
         $flexBasis={flexBasis}
         {...props}
      >
         {props.children}
      </StyledFlexCol>
   );
};

FlexCol.defaultProps = {
   fullWidth: true,
};
