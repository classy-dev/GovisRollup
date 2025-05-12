
import React from 'react';
import styled from '@emotion/styled';

export const TypoWrap = styled.div`
  div,
  p {
    margin-bottom: 2rem;
  }
  button {
    background: none;
  }
`;

const Typo = () => {
  return (
    <TypoWrap>
      <div>
        <p>
          <a href="#">링크</a>
        </p>
      </div>
      <div>
        <h1>H1 텍스트입니다.</h1>
      </div>
      <div>
        <h2>H2 텍스트입니다.</h2>
      </div>
      <div>
        <h3>H3 텍스트입니다.</h3>
      </div>
      <p>body 텍스트입니다.</p>
      <p className="small">body2 텍스트입니다.</p>
      <div>
        <label>라벨 텍스트입니다.</label>
      </div>
      <div>
        <label className="small">라벨 텍스트입니다.</label>
      </div>
      <div>
        <button type="button" disabled>
          버튼 disabled 텍스트
        </button>
      </div>
      <div>
        <input type="text" value="input disabled 텍스트" disabled />
      </div>
      <div className="helper-text">헬퍼 텍스트</div>
      <div className="helper-text small">small 헬퍼 텍스트</div>
    </TypoWrap>
  );
};

export default Typo;
