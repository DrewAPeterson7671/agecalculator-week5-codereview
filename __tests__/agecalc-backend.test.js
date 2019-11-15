import { ageEarthCalc } from '/./../src/agecalc-backend.js';

describe('ageEarthCalc', () => {
  test('determine if the number entered is an number', () => {
    let ageEarthCalc = ageEarthCalc('age');
    expect(ageEarthCalc).toEqual(false);
  });
});
