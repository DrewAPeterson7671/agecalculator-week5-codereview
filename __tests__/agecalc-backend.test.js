import { ageEarthInputCalc } from './../src/agecalc-backend.js';
import { ageMercuryCalc } from './../src/agecalc-backend.js';
import { ageVenusCalc } from './../src/agecalc-backend.js';

describe('ageEarthInputCalc', () => {
  test('determine if the number entered is not a number', () => {
    let ageEarthCalcTest = ageEarthInputCalc('age');
    expect(ageEarthCalcTest).toEqual(false);
  });
  test('determine if the number entered is an number', () => {
    let ageEarthCalcTest2 = ageEarthInputCalc(40);
    expect(ageEarthCalcTest2).toEqual(true);
  });
  test('determine if mercury age calculates correctly', () => {
    let ageMercuryCalcTest = ageMercuryCalc(20);
    expect(ageMercuryCalcTest).toEqual(83);
  });
  test('determine if mercury age calculates correctly', () => {
    let ageVenusCalcTest = ageVenusCalc(24);
    expect(ageVenusCalcTest).toEqual(38);
  });
});
