import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {
    describe('Black', () => {
      test('Black LowerCase', () => {
        expect(colorCode('black')).toEqual(0);
      });

      test('Black UpperCase', () => {
        expect(colorCode('Black')).toEqual(0);
      });
    });

    describe('White', () => {
      test('White LowerCase', () => {
        expect(colorCode('white')).toEqual(9);
      });
      test('White UpperCase', () => {
        expect(colorCode('White')).toEqual(9);
      });
    });

    describe('Orange', () => {
      test('Orange LowerCase', () => {
        expect(colorCode('orange')).toEqual(3);
      });

      test('Orange UpperCase', () => {
        expect(colorCode('Orange')).toEqual(3);
      });
    });

  });

  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});
