import convertToRoman from './../src/scripts.js';

describe ('convertToRoman', () => {

  test('should correctly convert a number to a roman numeral', () => {
    expect(convertToRoman(4)).toEqual("IV");
  });
});