/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const ResultMessage = ({ score }) => {
  const scoreRounded = Math.round(score * 10) / 10;

  let rank = '';
  if (score > 60) {
    rank = '天才的';
  } else if (score > 55) {
    rank = 'かなり高い';
  } else if (score > 50) {
    rank = '普通の人よりは高い';
  } else if (score > 45) {
    rank = '人並';
  } else if (score > 40) {
    rank = '普通の人よりも低い';
  } else {
    rank = 'かなり低い';
  }

  return (
    <>
      <p css={messageStyle}>
        あなたの発想力は<strong>{rank}</strong>です。
        <br />
        スコア(100点満点) : {scoreRounded}
      </p>
    </>
  );
};

const messageStyle = css`
  font-size: 30px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: medium;
  }
`;
