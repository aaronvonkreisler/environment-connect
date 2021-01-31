import React, { forwardRef, useState, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, ModalBackdrop, ModalContainer } from './style';

const Modal = forwardRef(function Modal({ children }, ref) {
   const [display, setDisplay] = useState(false);

   const modalRoot = document.querySelector('#modal-root');

   const open = () => {
      setDisplay(true);
   };

   const close = () => {
      setDisplay(false);
   };

   useImperativeHandle(ref, () => {
      return {
         openModal: () => open(),
         closeModal: () => close(),
      };
   });

   const childNode = (
      <ModalWrapper>
         <ModalBackdrop onClick={close} />
         <ModalContainer>{children}</ModalContainer>
      </ModalWrapper>
   );

   if (display) {
      return ReactDOM.createPortal(childNode, modalRoot);
   }

   return null;
});

export default Modal;
