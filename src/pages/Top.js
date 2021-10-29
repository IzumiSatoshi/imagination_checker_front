/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SubmitButton } from '../components/SubmitButton';
import { InputBoxList } from '../components/InputBoxList';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const Top = () => {
  const wordListLen = 10;
  const [wordList, setWordList] = useState(Array(wordListLen).fill('')); //初期値は空の要素
  let history = useHistory();

  const onSubmit = () => {
    let urlParam = new URLSearchParams();
    for (const word of wordList) {
      urlParam.append('word', word);
    }
    const resultURL = '/result?' + urlParam.toString();
    history.push(resultURL);
  };

  return (
    <>
      <Header />
      <Main>
        <div>
          <p css={textStyle}>あなたの発想力を測定し、数値化します。</p>
          <p css={textStyle}>
            以下の10個の入力欄それぞれに、できるだけ意味の異なる単語を入力してください。
            例えば、「手」と「足」は体の部位という意味で似ている単語ですが、「手」と「宇宙」は似ている単語ではありません。
            「発想力の高い人は、幅広いジャンルの単語を思いつくだろう」という考えに基づいて測定します。
          </p>
          <p css={textStyle}>
            以下の注意事項をお読みの上、測定をお願いします。
          </p>
          <ol>
            <li css={textStyle}>名詞以外を入力しないでください。</li>
            <li css={textStyle}>
              専門用語等、難しい単語を入力するとうまく測定できません。小学校の教科書レベルでお願いします。
            </li>
            <li css={textStyle}>地名などの固有名詞は入力しないでください。</li>
            <li css={textStyle}>
              測定結果を過信せず、あくまで参考程度にとどめてください。
            </li>
          </ol>
        </div>
        <InputBoxList wordListLen={wordListLen} setWordList={setWordList} />
        <SubmitButton onSubmit={onSubmit} />
      </Main>
    </>
  );
};

const textStyle = css`
  margin: 0;
  padding: 5px 10px;
`;
