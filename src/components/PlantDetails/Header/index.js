import React, { useState, useLayoutEffect } from 'react';
import { HeaderContainer, Title } from './style';
import WaveSvg from 'components/common/WaveSvg';
import { getColorForLayer } from 'utils/utils';

function Header({ title, layer }) {
   const [fill, setFill] = useState('#4B89DC');

   useLayoutEffect(() => {
      const color = getColorForLayer(layer);
      setFill(color);
   }, [layer]);

   return (
      <HeaderContainer>
         <WaveSvg fill={fill} />
         <Title>{title}</Title>
      </HeaderContainer>
   );
}

export default Header;
