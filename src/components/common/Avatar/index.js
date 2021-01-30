import React from 'react';
import PropTypes from 'prop-types';
import { AvatarRoot, AvatarImage } from './style';

function Avatar({ src, alt, size, shadow = false, ...rest }) {
   return (
      <AvatarRoot size={size} shadow={shadow} {...rest}>
         <AvatarImage src={src} alt={alt} />
      </AvatarRoot>
   );
}

Avatar.propTypes = {
   src: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   size: PropTypes.string,
   shadow: PropTypes.bool,
};

export default Avatar;
