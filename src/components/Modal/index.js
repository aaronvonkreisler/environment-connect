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
   {
      children,
      withTitle,
      small,
      withActions,
      title,
      onActionClick,
      buttonText,
      onCloseCallback,
   },
   ref
) {
   const [display, setDisplay] = useState(false);

   const modalRoot = document.querySelector('#modal-root');

   const open = () => {
      setDisplay(true);
   };

   const close = () => {
      setDisplay(false);
      if (onCloseCallback) {
         onCloseCallback();
      }
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
         <ModalContainer $small={small}>
            {withTitle && (
               <ModalTitle>
                  <h6>{title}</h6>
                  <IconButton onClick={close} grey>
                     <MdClose />
                  </IconButton>
               </ModalTitle>
            )}

            <ModalContent>{children}</ModalContent>
            {withActions && (
               <ModalActions>
                  <Button text={buttonText} outline onClick={onActionClick} />
               </ModalActions>
            )}
         </ModalContainer>
      </ModalWrapper>
   );

   if (display) {
      return ReactDOM.createPortal(childNode, modalRoot);
   }

   return null;
});

Modal.defaultProps = {
   withTitle: true,
   withActions: true,
};

Modal.propTypes = {
   children: PropTypes.node,
   title: PropTypes.string,
   buttonText: PropTypes.string,
   onActionClick: PropTypes.func,
};

export default Modal;
