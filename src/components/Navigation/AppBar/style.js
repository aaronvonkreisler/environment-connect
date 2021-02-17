import styled from 'styled-components';

export const AppBarRoot = styled.header`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 65px;
   padding-right: 24px;
   background-color: ${(props) => props.theme.colors.primary};
   color: ${(props) => props.theme.colors.textPrimary};
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   position: fixed;
   top: 0;
   left: auto;
   right: 0;
   z-index: 1100;
`;

export const MenuButtonContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-shrink: 0;
   flex-grow: 0;
   min-width: 75px;
   height: 100%;
`;
