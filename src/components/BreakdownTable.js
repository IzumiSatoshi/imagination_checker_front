/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const ResultTable = ({ resultJson }) => {
  const objectToArray = (object) => {
    let array = [];
    for (let key of Object.keys(object)) {
      array.push(object[key]);
    }
    return array;
  };

  const getSortedBreakdownArr = (breakdownObject) => {
    let arr = objectToArray(breakdownObject);
    //scoreでソートする
    arr.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      }
      if (a.score > b.socre) {
        return 1;
      }
      return 0;
    });

    return arr;
  };
  return (
    <>
      <h3 css={titleStyle}>スコア内訳表</h3>
      <table css={tableStyle}>
        <tbody>
          <tr>
            <th css={tableCellStyle}>単語1</th>
            <th css={tableCellStyle}>単語2</th>
            <th css={tableCellStyle}>スコア</th>
          </tr>
          {(() => {
            let trList = [];
            let breakdownArr = getSortedBreakdownArr(resultJson.breakdown);
            for (let i = 0; i < breakdownArr.length; i++) {
              trList.push(
                <tr>
                  <td css={tableCellStyle}>{breakdownArr[i].word1}</td>
                  <td css={tableCellStyle}>{breakdownArr[i].word2}</td>
                  <td css={tableCellStyle}>
                    {(() => {
                      //小数点一桁に丸める
                      return Math.round(breakdownArr[i].score * 10) / 10;
                    })()}
                  </td>
                </tr>
              );
            }
            return trList;
          })()}
        </tbody>
      </table>
    </>
  );
};

const titleStyle = css`
  text-align: center;
`;
const tableStyle = css`
  border-collapse: collapse;
  margin: 0 auto;
`;
const tableCellStyle = css`
  padding: 20px;
  border: 1px solid #333;
  text-align: center;
`;
