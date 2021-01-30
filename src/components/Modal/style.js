import styled from 'styled-components';

export const ModalWrapper = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
`;

export const ModalBackdrop = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 1500;
   background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
   position: relative;
   top: 50%;
   left: 50%;
   height: 70%;
   width: 50%;
   transform: translate(-50%, -50%);
   box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
      0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
   z-index: 1600;
   background-color: ${({ theme }) => theme.colors.containerGrey};
   overflow-y: auto;
   border-radius: 4px;
   padding: 16px 24px;
`;
