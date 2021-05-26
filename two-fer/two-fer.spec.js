import { twoFer } from './two-fer';

describe('twoFer()', () => {
  test('no name given', () => {
    expect(twoFer()).toEqual('One for you, one for me.');
  });

  test('a name given', () => {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  test('another name given', () => {
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.');
  });

  test('Maria name given', () => {
    expect(twoFer('Maria')).toEqual('One for Maria, one for me.');
  });
});
