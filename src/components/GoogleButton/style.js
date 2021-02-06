import styled from 'styled-components';

export const GoogleWrapper = styled.div`
   min-width: 184px;
   height: 42px;
   background-color: #4285f4;
   border-radius: 2px;
   box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
   cursor: pointer;
   & > div {
      position: absolute;
      margin-top: 1px;
      margin-left: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: #fff;
      & > img {
         position: absolute;
         margin-top: 11px;
         margin-left: 11px;
         width: 18px;
         height: 18px;
      }
   }

   & > span {
      float: right;

      color: #fff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-align: center;
      vertical-align: middle;
      line-height: 42px;
      width: 100%;
      height: 100%;
   }

   &:hover {
      box-shadow: 0 0 6px #4285f4;
      transition: box-shadow 0.2s ease-in;
   }
`;
