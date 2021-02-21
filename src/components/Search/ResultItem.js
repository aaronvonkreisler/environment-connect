import React from 'react';
import { StyledResult } from './style';

function ResultItem({ plant }) {
   const { plantName, layer, zone, id } = plant;
   return <StyledResult>{plantName}</StyledResult>;
}

export default ResultItem;
