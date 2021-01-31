import React, { forwardRef, useState, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import {
   ModalWrapper,
   ModalBackdrop,
   ModalContainer,
   ModalTitle,
   ModalContent,
   ModalActions,
} from './style';
import IconButton from 'components/common/IconButton';
import Button from 'components/common/Button';
const Modal = forwardRef(function Modal(
   { children, title, onActionClick, buttonText },
   ref
) {
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
         <ModalContainer>
            <ModalTitle>
               <h6>{title}</h6>
               <IconButton onClick={close}>
                  <MdClose />
               </IconButton>
            </ModalTitle>
            <ModalContent>{children}</ModalContent>
            <ModalActions>
               <Button text={buttonText} outline onClick={onActionClick} />
            </ModalActions>
         </ModalContainer>
      </ModalWrapper>
   );

   if (display) {
      return ReactDOM.createPortal(childNode, modalRoot);
   }

   return null;
});

Modal.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired,
   onActionClick: PropTypes.func.isRequired,
};

export default Modal;
