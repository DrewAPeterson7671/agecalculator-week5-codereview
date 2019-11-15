
import { PlanetAge } from  './../src/agecalc-backend.js';

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
    expect (marsAgeTest.calcAges()).toEqual(83);
  });
  test('test if mars calculation is stored correctly', () => {
    let marsAgeTest2 = new PlanetAge(20);
    expect (marsAgeTest2.marsAge).toEqual(83);
  });



});
