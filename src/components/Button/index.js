import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, ButtonText } from './style';

function Button({ outline, text, ...rest }) {
   return (
      <StyledButton outline={outline} {...rest}>
         <ButtonText>{text}</ButtonText>
      </StyledButton>
   );
}

Button.propTypes = {
   outline: PropTypes.bool,
};

export default Button;
