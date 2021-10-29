/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div css={wrapperStyle}>
      <h1 css={titleStyle}>発想力測定器</h1>
      <ul css={ulStyle}>
        <li css={liStyle}>
          <Link to="/" css={linkStyle}>
            トップ
          </Link>
        </li>
        <li css={liStyle}>
          <Link to="/about" css={linkStyle}>
            これは何？
          </Link>
        </li>
      </ul>
    </div>
  );
};
const wrapperStyle = css`
  width: 1000px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: block;
    width: auto;
  }
`;
const titleStyle = css`
  display: inline;
  padding: 10px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

const ulStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: end;
  }
`;

const liStyle = css`
  list-style: none;
`;

const linkStyle = css`
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  border: #333 solid 1px;
  @media (max-width: 1000px) {
    padding: 5px 10px;
  }
`;
