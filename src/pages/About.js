/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const About = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>これは何？</h1>
        <p css={textStyle}>
          この測定器は、Naming unrelated words predicts
          creativityという研究（下記にリンクあり）に強くインスパイアを受けて作られました。
          英語版の測定器は、すでに作られているのですが、日本語版のものも作ってみたくなり、作成に至りました。
          本家からの許可は特にとっていないので、何か問題があればすぐに削除する予定です。
        </p>
        <p css={textStyle}>
          本家の発想力計測サイト :{' '}
          <a href="https://www.datcreativity.com/task" css={aStyle}>
            https://www.datcreativity.com/task
          </a>
          <br />
          本家の研究 :{' '}
          <a
            href="https://www.pnas.org/content/118/25/e2022340118"
            css={aStyle}
          >
            https://www.pnas.org/content/118/25/e2022340118
          </a>
        </p>
        <p css={textStyle}>
          技術的な解説記事は、こちらで公開しています。
          <br />
          <a
            href="https://qiita.com/IzumiSatoshi/items/a026015275124cc0e9cf"
            css={aStyle}
          >
            https://qiita.com/IzumiSatoshi/items/a026015275124cc0e9cf
          </a>
        </p>
        <p css={textStyle}>
          githubでソースコードを公開しています。
          <br />
          フロントエンド :{' '}
          <a
            href="https://github.com/IzumiSatoshi/imagination_checker_front"
            css={aStyle}
          >
            https://github.com/IzumiSatoshi/imagination_checker_front
          </a>
          <br />
          バックエンド :{' '}
          <a
            href="https://github.com/IzumiSatoshi/imagination_checker_back"
            css={aStyle}
          >
            https://github.com/IzumiSatoshi/imagination_checker_back
          </a>
        </p>
        <p css={textStyle}>
          連絡先
          <br />
          〇を@に変更して送信をお願いします。
          <br />
          izumisatoshi05〇gmail.com
        </p>
      </Main>
    </>
  );
};

const textStyle = css`
  margin: 0;
  padding: 10px 10px;
`;

const aStyle = css`
  word-wrap: break-word;
`;
