/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Main = ({ children }) => {
  return <main css={mainStyle}>{children}</main>;
};
const mainStyle = css`
  width: 1000px;
  margin: 50px auto;

  @media (max-width: 1000px) {
    width: auto;
  }
`;
