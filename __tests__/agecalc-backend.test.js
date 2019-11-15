import { ageEarthCalc } from './../src/agecalc-backend.js';

describe('ageEarthCalc', () => {
  test('determine if the number entered is an number', () => {
    let ageEarthCalcTest = ageEarthCalc('age');
    expect(ageEarthCalc).toEqual(false);
  });
});
