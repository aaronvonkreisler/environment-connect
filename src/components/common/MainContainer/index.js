import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

function MainContainer({ children }) {
   return <Container>{children}</Container>;
}

MainContainer.propTypes = {
   children: PropTypes.node.isRequired,
};

export default MainContainer;
