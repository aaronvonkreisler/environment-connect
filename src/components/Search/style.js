import styled from 'styled-components';

export const SearchBarContainer = styled.div`
   position: relative;
   margin-left: 8px;
   margin-right: 16px;
   border-radius: 4px;
   background-color: ${({ theme }) => theme.colors.containerGrey};
   min-height: 35px;
   @media ${({ theme }) => theme.device.tabletAndDown} {
      display: none !important;
   }

   & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 35px;
   }
`;

export const Searchbar = styled.div`
   cursor: text;
   display: inline-flex;
   font-size: 1rem;
   align-items: center;
   line-height: 1.185em;
   letter-spacing: 0.00938em;
   color: inherit;
`;

export const Input = styled.input`
   background-color: transparent;
   position: relative;
   width: 280px;
   height: 1.1875em;
   display: block;
   color: ${(props) => props.theme.colors.textPrimary};
   transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
   font-size: 18px;
   padding-right: 10px;
   padding-left: 10px;

   &:focus {
      width: 310px;
   }

   &::placeholder {
      font-size: 16px;
      color: ${(props) => props.theme.colors.textSecondary};
   }

   @media ${(props) => props.theme.device.laptop} {
      width: 480px;

      &:focus {
         width: 520px;
      }
   }
   @media ${(props) => props.theme.device.desktop} {
      width: 480px;

      &:focus {
         width: 520px;
      }
   }

   @media ${(props) => props.theme.device.tablet} {
      width: 380px;

      &:focus {
         width: 400px;
      }
   }
`;

export const Icon = styled.div`
   width: 72px;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   & > svg {
      font-size: 20px;
      vertical-align: text-bottom;
   }
`;

export const ResultsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 100%;
   margin-top: 6px;
`;

export const StyledResult = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
   padding: 8px;
   cursor: pointer;
`;
