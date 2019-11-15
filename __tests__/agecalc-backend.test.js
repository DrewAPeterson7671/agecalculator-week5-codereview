
import { ageMercuryCalc } from './../src/agecalc-backend.js';
import { ageVenusCalc } from './../src/agecalc-backend.js';
import { PlanetAge } from  './../src/agecalc-backend.js';

describe('ageEarthInputCalc', () => {
  test('determine if mercury age calculates correctly', () => {
    let ageMercuryCalcTest = ageMercuryCalc(20);
    expect(ageMercuryCalcTest).toEqual(83);
  });
  test('determine if mercury age calculates correctly', () => {
    let ageVenusCalcTest = ageVenusCalc(20);
    expect(ageVenusCalcTest).toEqual(32);
  });
});

describe('PlanetAge', () => {
  test('to determine if object is loading input age correctly', () => {
    let planetAgeTest = new PlanetAge(20);
    expect (planetAgeTest.inputAge).toEqual(20);
  });
  test('folding in input type function to class', () => {
    let planetAgeTest2 = new PlanetAge('age');
    expect (planetAgeTest2.checkInput()).toEqual(false);
  });
  test('folding in input verify number function to class', () => {
    let planetAgeTest3 = new PlanetAge(20);
    expect (planetAgeTest3.checkInput()).toEqual(true);
  });
  test('test if mars calculation is correct', () => {
    let marsAgeTest = new PlanetAge(20);
    console.log(marsAgeTest.marsAge);
    expect (marsAgeTest.calcAges()).toEqual(83);
  });
  test('test if mars calculation is stored correctly', () => {
    let marsAgeTest2 = new PlanetAge(20);
    expect (marsAgeTest2.marsAge).toEqual(83);
  });



});
