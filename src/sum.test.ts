import { sum } from './sum';

describe('sum 함수', () => {
  it('1 + 2 = 3을 반환해야 함', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('음수 값도 계산할 수 있어야 함', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
