import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorContainer = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #212121;
   z-index: 4000;
`;

export const ErrorIcon = styled.div`
   font-size: 6rem;
   color: ${({ theme }) => theme.colors.textError};
`;

export const Message = styled.div`
   font-size: ${(props) => (props.$small ? '1.2rem' : '2rem')};
   color: #fff;
`;

export const ErrorAlert = styled.div`
   min-width: 50%;
   padding: 1rem 1rem;
   margin-bottom: 1rem;
   border-radius: 0.25rem;
   background-color: #cf6679;
   color: #000000;
   margin: 3rem 1rem;
`;

export const ReloadButton = styled.button`
   font-size: 0.875rem;
   min-width: 64px;
   font-weight: 500;
   line-height: 1.75;
   border-radius: 4px;
   letter-spacing: 0.02857em;
   text-transform: uppercase;
   cursor: pointer;
   display: inline-flex;
   position: relative;
   outline: 0;
   align-items: center;
   justify-content: center;
   padding: 5px 15px;
   transition: background-color 0.2s ease-in-out;
   background-color: ${({ theme }) => theme.colors.blue};
   color: ${({ theme }) => theme.colors.textPrimary};

   &:hover {
      background-color: 'rgba(75, 137, 220, 0.8)';
   }
`;
