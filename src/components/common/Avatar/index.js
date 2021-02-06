import React from 'react';
import PropTypes from 'prop-types';
import { AvatarRoot, AvatarImage } from './style';
import defaultImage from 'images/defaultProfileImage.jpg';

function Avatar({ src = defaultImage, alt, size, shadow = false, ...rest }) {
   return (
      <AvatarRoot size={size} shadow={shadow} {...rest}>
         <AvatarImage src={src === null ? defaultImage : src} alt={alt} />
      </AvatarRoot>
   );
}

Avatar.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string.isRequired,
   size: PropTypes.string,
   shadow: PropTypes.bool,
};

export default Avatar;
