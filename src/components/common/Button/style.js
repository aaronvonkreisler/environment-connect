import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
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
   ${(props) =>
      props.fullWidth &&
      css`
         width: 100% !important;
      `}
   background-color: ${(props) =>
      props.outline ? 'transparent' : props.theme.colors.blueRGB};
   color: ${(props) =>
      props.outline
         ? props.theme.colors.blueRGB
         : props.theme.colors.textPrimary};
   border: ${(props) =>
      props.outline ? '1px solid rgba(30, 136, 229, 0.5)' : 'transparent'};

   &:hover {
      border: ${(props) =>
         props.outline
            ? '1px solid ' + props.theme.colors.blue
            : 'transparent'};
      background-color: ${(props) =>
         props.outline ? 'rgba(30, 136, 229, 0.08)' : 'rgb(26, 145, 218)'};
      /*  */
   }
`;

export const ButtonText = styled.span`
   width: 100%;
   display: inherit;
   align-items: inherit;
   justify-content: inherit;
`;
