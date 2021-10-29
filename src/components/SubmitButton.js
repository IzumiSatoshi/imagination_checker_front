/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SubmitButton = ({ onSubmit }) => {
  return (
    <button onClick={onSubmit} css={buttonStyle}>
      測定
    </button>
  );
};

const buttonStyle = css`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 50px;
`;
