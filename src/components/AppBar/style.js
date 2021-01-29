import styled from 'styled-components';

export const AppBarRoot = styled.header`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 65px;
   padding: 0 24px;
   background-color: ${(props) => props.theme.colors.primary};
   color: ${(props) => props.theme.colors.textPrimary};
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   position: fixed;
   top: 0;
   left: auto;
   right: 0;

   @media ${(props) => props.theme.device.mobile} {
      bottom: 0;
      top: auto;
   }
`;

export const LogoItems = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex-shrink: 0;
   flex-grow: 0;
`;

export const LogoImage = styled.div`
   display: flex;
   overflow: hidden;
   position: relative;
   font-size: 1.25rem;
   align-items: center;
   flex-shrink: 0;
   border-radius: 50%;
   justify-content: center;
   cursor: pointer;
   height: 50px;
   width: 50px;

   & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      text-align: center;
      text-indent: 10000px;
      cursor: pointer;
   }
`;

export const SearchBarContainer = styled.div`
   position: relative;
   margin-left: 8px;
   margin-right: 16px;
   border-radius: 4px;
   background-color: #333;
   min-height: 35px;
   @media ${(props) => props.theme.device.mobile} {
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
      width: 500px;

      &:focus {
         width: 540px;
      }
   }

   @media ${(props) => props.theme.device.tablet} {
      width: 400px;

      &:focus {
         width: 440px;
      }
   }

   @media ${(props) => props.theme.device.mobileLarge} {
      width: 250px;

      &:focus {
         width: 270px;
      }
   }
`;
