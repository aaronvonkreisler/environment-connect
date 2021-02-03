import React from 'react';
import PropTypes from 'prop-types';
import { PulseBar } from './style';

function SkeletonPulse({ height }) {
   return <PulseBar $height={height} />;
}

SkeletonPulse.propTypes = {
   height: PropTypes.string,
};
export default SkeletonPulse;
