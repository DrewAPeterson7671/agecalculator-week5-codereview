import { ageEarthCalc } from './../src/agecalc-backend.js';

describe('ageEarthCalc', () => {
  test('determine if the number entered is not a number', () => {
    let ageEarthCalcTest = ageEarthCalc('age');
    expect(ageEarthCalcTest).toEqual(false);
  });
  test('determine if the number entered is an number', () => {
    let ageEarthCalcTest2 = ageEarthCalc(40);
    console.log(ageEarthCalcTest2);
    expect(ageEarthCalcTest2).toEqual(true);
  });
});
