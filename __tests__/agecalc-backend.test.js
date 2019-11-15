import { ageEarthInputCalc } from './../src/agecalc-backend.js';

describe('ageEarthInputCalc', () => {
  test('determine if the number entered is not a number', () => {
    let ageEarthCalcTest = ageEarthInputCalc('age');
    expect(ageEarthCalcTest).toEqual(false);
  });
  test('determine if the number entered is an number', () => {
    let ageEarthCalcTest2 = ageEarthInputCalc(40);
    expect(ageEarthCalcTest2).toEqual(true);
  });
});
