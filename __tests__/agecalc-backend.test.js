
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
  test('test if mercury calculation is correct', () => {
    let mercuryAgeTest = new PlanetAge(20);
    expect (mercuryAgeTest.calcMerc()).toEqual(83);
  });
  test('test if venus calculation is correct', () => {
    let venusAgeTest = new PlanetAge(20);
    expect (venusAgeTest.calcVen()).toEqual(32);
  });
  test('test if mars calculation is correct', () => {
    let calcMarsTest = new PlanetAge(20);
    expect (calcMarsTest.calcMars()).toEqual(10);
  });


});
