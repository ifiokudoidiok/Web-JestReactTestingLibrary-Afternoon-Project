import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('can multiply two numbers', () => {
    expect(helpers.multiply( 2, 3)).toBe(6);
    expect(helpers.multiply( 2, 3)).not.toBe(7);
  });
  it('can multiply two negative numbers', () => {
    expect(helpers.multiply(-2, -3)).toBe(6);
    expect(helpers.multiply( 2, 3)).not.toBe(7);
  });
  it('can multiply decimals', () => {
    expect(helpers.multiply(-2.5, -3)).toBe(7.5);
    expect(helpers.multiply( 2, 3)).not.toBe(7);
  });
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });
  
  it('returns null if fed no arguments', () => {
    expect(helpers.personMaker()).toBeNull();
  });
  
  it('returns null if fed a single argument', () => {
    expect(helpers.personMaker('peter')).toBeNull();
  });

  it('throws if fed something which is not a number for age', () => {
    expect(() => helpers.personMaker('peter', '2')).toThrow();
  });

  it('throws if fed something which is not a string for name', () => {
    expect(() => helpers.personMaker(1, 5)).toThrow();
  });
  it('throws if age is negative number', () => {
    expect(() => helpers.personMaker('paul', -5)).toThrow();
  });
  // write more tests! <===========================================
});
