/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { ResultTable } from '../components/BreakdownTable';
import { ResultMessage } from '../components/ResultMessage';

export const Result = () => {
  const urlParams = new URLSearchParams(useLocation().search);
  let history = useHistory();
  const [resultJson, setResultJson] = useState();
  useEffect(() => {
    const wordList = urlParams.getAll('word');
    const url = 'https://imagination-checker-back.izumi-satoshi.com';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word_list: wordList }),
      mode: 'cors',
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((resJson) => {
        setResultJson(resJson);
      });
  }, []);

  const onClickRetryButton = () => {
    history.push('/');
  };
  return (
    <>
      <Header />
      <Main>
        {(() => {
          if (resultJson === undefined) {
            return <p css={waitingTextStyle}>測定中.....</p>;
          } else {
            return (
              <>
                <ResultMessage score={resultJson.score} />
                <button onClick={onClickRetryButton} css={retryButtonStyle}>
                  再測定
                </button>
                <ResultTable resultJson={resultJson} />
              </>
            );
          }
        })()}
      </Main>
    </>
  );
};
const waitingTextStyle = css`
  font-size: large;
  text-align: center;
`;

const retryButtonStyle = css`
  display: block;
  width: 100px;
  height: 50px;
  margin: 0 auto;
`;
