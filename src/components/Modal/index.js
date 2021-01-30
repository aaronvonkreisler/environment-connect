import React, { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = memo(function Modal({ component, ...rest }) {
   const modalRoot = document.querySelector('#modal-root');
   const el = document.createElement('div');

   const Child = require(`../${component}`).default;

   useEffect(() => {
      const hide = ({ target }) => {
         if (target === el || !el.contains(target)) {
         }
      };
   }, []);

   return ReactDOM
      .createPortal
      // <Child hide={() => hideModal(component)} {...rest} />
      ();
});

export default Modal;
