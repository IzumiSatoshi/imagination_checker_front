/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const InputBox = ({ idx, setWordList }) => {
  const onChange = (e) => {
    setWordList((prev) => {
      prev[idx] = e.target.value;
      return prev;
    });
  };
  return (
    <>
      <input type="text" onChange={onChange} css={inputStyle} />
    </>
  );
};

const inputStyle = css`
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
`;
