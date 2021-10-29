/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { InputBox } from './InputBox';

export const InputBoxList = ({ wordListLen, setWordList }) => {
  return (
    <>
      <dl>
        <h2 css={titleStyle}>入力欄</h2>
        {(() => {
          const inputBoxList = [];
          for (let i = 0; i < wordListLen; i++) {
            inputBoxList.push(
              <div css={dlRowStyle}>
                <dt css={dtStyle}>{i + 1} : </dt>
                <dd>
                  <InputBox idx={i} setWordList={setWordList} />
                </dd>
              </div>
            );
          }
          return inputBoxList;
        })()}
      </dl>
    </>
  );
};
const dlRowStyle = css`
  width: 300px;
  margin: 10px auto;
`;
const dtStyle = css`
  float: left;
`;
const titleStyle = css`
  text-align: center;
`;
