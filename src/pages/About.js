/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const About = () => {
  return (
    <>
      <Header />
      <Main>
        <p css={textStyle}>
          <a href="https://www.datcreativity.com/task" css={aStyle}>
            本家の測定サイト
          </a>
        </p>
        <p css={textStyle} css={aStyle}>
          githubでソースコードを公開しています。
          <br />
          バックエンド :{' '}
          <a href="https://github.com/IzumiSatoshi/imagination_checker_back">
            https://github.com/IzumiSatoshi/imagination_checker_back
          </a>
        </p>
      </Main>
    </>
  );
};

const textStyle = css`
  margin: 0;
  padding: 5px 10px;
`;

const aStyle = css`
  word-wrap: break-word;
`;
